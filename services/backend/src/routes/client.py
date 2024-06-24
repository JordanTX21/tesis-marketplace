from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from src.config.db import conn
from src.models.client import clients
from datetime import datetime

order = APIRouter(
    prefix="/order",
    tags=["order"],
)

@order.get("/")
def index():
    result = conn.execute(clients.select().where(clients.c.status==True)).fetchall()
    data = []
    for row in result:
        order_dict = dict(row._mapping)
        order_dict["created_at"] = order_dict["created_at"].isoformat()
        if order_dict["updated_at"]:
            order_dict["updated_at"] = order_dict["updated_at"].isoformat()
        data.append(order_dict)
    if len(data) == 0:
        return JSONResponse(content={"success": False, "message": "No se encontraron resultados"})
    return JSONResponse(content={"success": True, "message": "Lista de clientes", "data": data})