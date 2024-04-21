from fastapi import APIRouter

user = APIRouter(
    prefix="/user",
    tags=["user"],
)

@user.get("/")
def index():
    return "hola"