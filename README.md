# Setup


# Backend
```
py -m venv env
```
```
env\Scripts\activate
```
```
cd services/backend
```
```
py -m pip install -r requirements.txt
```
```
uvicorn src.main:app --reload
```

# Frontend
```
cd services/frontend
```
```
npm install
```
```
npm run dev
```
```
npm run build
```