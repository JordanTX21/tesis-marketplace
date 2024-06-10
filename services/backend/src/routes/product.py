from fastapi import APIRouter
from src.core.Recommendation import CoreRecommendation
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

product = APIRouter(
    prefix="/product",
    tags=["product"],
)

@product.get("/")
def index():
    text_search = 'I need Men casual t-shits'
    items = get_recommend_items(text_search, top_k=5)
    return JSONResponse(content=jsonable_encoder(items))



def get_recommend_items(text, top_k=2):
    api_url = 'https://fakestoreapi.com/products'
    c_search = CoreRecommendation(api_url)
    items = c_search.recommended_products(text, top_k)
    return items