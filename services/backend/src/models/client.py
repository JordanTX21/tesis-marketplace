from sqlalchemy import Table, Column
from sqlalchemy.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, DateTime, Boolean
from config.db import meta

client = Table('client', meta, 
    Column('id',Integer,primary_key=True),
    Column('type_document',String(255)),
    Column('document',String(255)),
    Column('address',String(255)),
    Column('email',String(255)),
    Column('user_id',ForeignKey("users.id"),nullable=True),
    Column('created_at',DateTime),
    Column('updated_at',DateTime,nullable=True),
    Column('status',Boolean,default=True),
    )