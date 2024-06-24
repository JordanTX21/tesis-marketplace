from typing import Optional, List
from pydantic import BaseModel

class Product(BaseModel):
    id: Optional[str] = None
    quantity: int
    amount: float

class Order(BaseModel):
    id: Optional[str] = None
    quantity: int
    amount: float
    client_id: int
    products: List[Product]