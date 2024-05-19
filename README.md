# Setup


# Backend
```
cd services/backend
py -m pip install -r requirements.txt
uvicorn src.main:app --reload
```

# Frontend
```
cd services/frontend
npm install
npm run dev
```