from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from src.config.db import conn
from src.models.order import orders
from src.models.order_state import order_states
from datetime import datetime
from src.schemas.order import Order
from src.schemas.order_state import OrderState

order = APIRouter(
    prefix="/order",
    tags=["order"],
)

@order.get("/")
def index():
    result = conn.execute(orders.select().where(orders.c.status==True)).fetchall()
    data = []
    for row in result:
        order_dict = dict(row._mapping)
        order_dict["created_at"] = order_dict["created_at"].isoformat()
        if order_dict["updated_at"]:
            order_dict["updated_at"] = order_dict["updated_at"].isoformat()
        data.append(order_dict)
    if len(data) == 0:
        return JSONResponse(content={"success": False, "message": "No se encontraron resultados"})
    return JSONResponse(content={"success": True, "message": "Lista de ordenes", "data": data})
    
@order.post("/")
def store(order: Order):
    quantity = 0
    amount = 0
    for product in order.products:
        quantity += product.quantity
        amount += product.amount
    new_order = {"quantity":quantity,"amount":amount,"client":order.client_id,"created_at": datetime.now()}
    result = conn.execute(orders.insert().values(new_order))
    result_order_states = conn.execute(order_states.insert().values({"state": "IN PREPARATION","order_id": result.lastrowid,"created_at": datetime.now()}))
    conn.commit()
    data = conn.execute(orders.select().where(orders.c.id == result.lastrowid)).first()
    if data is None:
        return JSONResponse(content={"success": False, "message": "Ocurrió un error al crear la orden"})
    user_dict = dict(data._mapping)
    user_dict["created_at"] = user_dict["created_at"].isoformat()
    if user_dict["updated_at"]:
        user_dict["updated_at"] = user_dict["updated_at"].isoformat()
    return JSONResponse(content={"success": True, "message": "Orden creada", "data": user_dict})
    
@order.put("/{id}")
def update(id:str,order: Order):
    quantity = 0
    amount = 0
    for product in order.products:
        quantity += product.quantity
        amount += product.amount
    new_order = {"quantity":quantity,"amount":amount,"client":order.client_id,"updated_at": datetime.now()}
    result = conn.execute(orders.update().values(new_order).where(orders.c.id == id))
    conn.commit()
    data = conn.execute(orders.select().where(orders.c.id == id)).first()
    if data is None:
        return JSONResponse(content={"success": False, "message": "Ocurrió un error al actualizar la orden"})
    order_dict = dict(data._mapping)
    order_dict["created_at"] = order_dict["created_at"].isoformat()
    if order_dict["updated_at"]:
        order_dict["updated_at"] = order_dict["updated_at"].isoformat()
    return JSONResponse(content={"success": True, "message": "Orden actualizada", "data": order_dict})
    
@order.get("/{id}")
def show(id:str):
    data = conn.execute(orders.select().where(orders.c.id == id)).first()
    if data is None:
        return JSONResponse(content={"success": False, "message": "No se encontró la orden"})
    user_dict = dict(data._mapping)
    user_dict["created_at"] = user_dict["created_at"].isoformat()
    if user_dict["updated_at"]:
        user_dict["updated_at"] = user_dict["updated_at"].isoformat()
    return JSONResponse(content={"success": True, "message": "Orden encontrado", "data": user_dict})
    
@order.delete("/{id}")
def destroy(id:str):
    result = conn.execute(orders.delete().where(orders.c.id == id))
    conn.commit()
    return JSONResponse(content={"success": True, "message": "Orden eliminada"})

@order.post("/state/{id}")
def state(id:str,order_state:OrderState):
    result_order_states = conn.execute(order_states.insert().values({"state":order_state.state,"order_id": id,"created_at": datetime.now()}))
    conn.commit()
    return JSONResponse(content={"success": True, "message": "Estado de orden actualizado"})
    