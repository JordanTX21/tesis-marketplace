import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, MetaData

# SQLALCHEMY_DATABASE_URL = "mysql+pymysql://"+str(os.getenv('DB_HOST'))+":"+str(os.getenv('DB_USER'))+"@"+str(os.getenv('DB_PASSWORD'))+":3306/"+str(os.getenv('DB_NAME'))
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:@localhost:3306/marketplace"
engine = create_engine(SQLALCHEMY_DATABASE_URL)

meta = MetaData()

conn = engine.connect()