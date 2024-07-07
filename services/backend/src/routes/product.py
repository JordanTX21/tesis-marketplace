from fastapi import APIRouter
from src.core.Recommendation import CoreRecommendation
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from src.config.db import conn
from src.models.product import products
from src.models.product_image import product_images
from src.models.product_rate import product_rates
from src.models.product_category import product_categories
from src.models.methadata import methadata
from datetime import datetime
from src.schemas.product import Product
import requests

product = APIRouter(
    prefix="/product",
    tags=["product"],
)

@product.get("/recomended")
def recomended():
    id=9
    result = conn.execute(methadata.select().where(methadata.c.user_id==id and methadata.c.status==True)).fetchall()
    methadatas = [dict(data._mapping)["type"] for data in result]
    # text_search = 'I need Men casual t-shits'
    text_search = 'I need '+' '.join(methadatas)
    items = get_recommend_items(text_search, top_k=5)
    return JSONResponse(content={"success": True, "message": "Lista de productos", "data": jsonable_encoder(items)})

@product.get("/all")
def all():
    response = requests.get("https://fakestoreapi.com/products")
    return response.json()

@product.get("/")
def index():
    result = conn.execute(products.select().where(products.c.status==True)).fetchall()
    data = []
    for row in result:
        product_dict = dict(row._mapping)
        product_dict["created_at"] = product_dict["created_at"].isoformat()
        if product_dict["updated_at"]:
            product_dict["updated_at"] = product_dict["updated_at"].isoformat()
        images = conn.execute(product_images.select().where(product_images.c.product_id==product_dict["id"] and product_images.c.status==True)).fetchall()
        product_dict["images"] = [dict(img._mapping)["image"] for img in images]
        product_dict["image"] = product_dict["images"][0]
        rate = conn.execute(product_rates.select().where(product_rates.c.product_id==product_dict["id"] and product_rates.c.status==True)).first()
        rate = dict(rate._mapping) if rate is not None else None
        product_dict["rating"] = {
            "rate": rate["rate"] if rate is not None else 0,
            "count": rate["count"] if rate is not None else 0
        }
        categories = conn.execute(product_categories.select().where(product_categories.c.product_id==product_dict["id"] and product_categories.c.status==True)).fetchall()
        categories = [dict(category._mapping)["name"] for category in categories]
        product_dict["categories"] = categories
        product_dict["category"] = categories[0]
        data.append(product_dict)
    if len(data) == 0:
        return JSONResponse(content={"success": False, "message": "No se encontraron resultados"})
    return JSONResponse(content={"success":True,"message":"Lista de productos","data":data})

@product.post("/")
def store(product: Product):
    new_product = {
        "name":product.name,
        "description":product.description,
        "price":product.price,
        "min_stock":product.min_stock,
        "user_id":product.user_id,
        "created_at": datetime.now()
    }
    result = conn.execute(products.insert().values(new_product))
    conn.commit()
    inserted_product_id = result.lastrowid
    if product.images:
        for image_path in product.images:
            conn.execute(product_images.insert().values({
                "image": image_path,
                "product_id": inserted_product_id,
                "created_at": datetime.now(),
            }))
    if product.categories:
        for category in product.categories:
            conn.execute(product_categories.insert().values({
                "name": category,
                "product_id": inserted_product_id,
                "created_at": datetime.now(),
            }))
    data = conn.execute(products.select().where(products.c.id == inserted_product_id)).first()
    if data is None:
        return JSONResponse(content={"success": False, "message": "Ocurrió un error al crear el producto"})
    product_dict = dict(data._mapping)
    product_dict["created_at"] = product_dict["created_at"].isoformat()
    if product_dict["updated_at"]:
        product_dict["updated_at"] = product_dict["updated_at"].isoformat()
    return JSONResponse(content={"success": True, "message": "Producto creado", "data": product_dict})

@product.put("/{id}")
def update(id:str,product: Product):
    new_product = {
        "name":product.name,
        "description":product.description,
        "price":product.price,
        "min_stock":product.min_stock,
        "user_id":product.user_id,
        "updated_at": datetime.now()
    }
    result = conn.execute(products.update().values(new_product).where(products.c.id == id))
    conn.commit()
    # Actualizar las imágenes si se proporcionan nuevas imágenes
    if product.images:
        conn.execute(product_images.delete().where(product_images.c.product_id == id))
        # Guardar las rutas de las nuevas imágenes en la tabla product_images
        for image_path in product.images:
            conn.execute(product_images.insert().values({
                "image_path": image_path,
                "product_id": id,
                "created_at": datetime.now(),
            }))
    if product.categories:
        conn.execute(product_categories.delete().where(product_categories.c.product_id == id))
        for category in product.categories:
            conn.execute(product_categories.insert().values({
                "name": category,
                "product_id": id,
                "created_at": datetime.now(),
            }))
    data = conn.execute(products.select().where(products.c.id == id)).first()
    if data is None:
        return JSONResponse(content={"success": False, "message": "Ocurrió un error al crear el producto"})
    product_dict = dict(data._mapping)
    product_dict["created_at"] = product_dict["created_at"].isoformat()
    if product_dict["updated_at"]:
        product_dict["updated_at"] = product_dict["updated_at"].isoformat()
    return JSONResponse(content={"success": True, "message": "Producto creado", "data": product_dict})

@product.get("/{id}")
def show(id:str):
    data = conn.execute(products.select().where(products.c.id == id)).first()
    if data is None:
        return JSONResponse(content={"success": False, "message": "No se encontró el producto"})
    product_dict = dict(data._mapping)
    product_dict["created_at"] = product_dict["created_at"].isoformat()
    if product_dict["updated_at"]:
        product_dict["updated_at"] = product_dict["updated_at"].isoformat()
    return JSONResponse(content={"success": True, "message": "Producto encontrado", "data": product_dict})

@product.delete("/{id}")
def destroy(id:str):
    result = conn.execute(products.delete().where(products.c.id == id))
    conn.commit()
    return JSONResponse(content={"success": True, "message": "Producto eliminado"})

def get_recommend_items(text, top_k=2):
    api_url = 'https://fakestoreapi.com/products'
    c_search = CoreRecommendation(api_url)
    items = c_search.recommended_products(text, top_k)
    return items
