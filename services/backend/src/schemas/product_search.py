from typing import Optional
from pydantic import BaseModel

class Product(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None
    min_price: Optional[float] = None
    max_price: Optional[float] = None
    order_by: Optional[str] = None