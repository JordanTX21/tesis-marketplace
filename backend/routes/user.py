from fastapi import APIRouter

user = APIRouter()

@user.get("/")
def index():
    return "hola"