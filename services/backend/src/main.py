from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path
from src.routes.user import user

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve the Vue app in production mode
try:
    # Directory where Vue app build output is located
    build_dir = Path(__file__).resolve().parent / "dist"
    index_path = build_dir / "index.html"

    # Serve assets files from the build directory
    app.mount("/assets", StaticFiles(directory=build_dir / "assets"), name="assets")

    # Catch-all route for SPA
    @app.get("/{catchall:path}")
    async def serve_spa(catchall: str):
        # If the requested file exists, serve it, else serve index.html
        path = build_dir / catchall
        if path.is_file():
            return FileResponse(path)
        return FileResponse(index_path)

except RuntimeError:
    # The build directory does not exist
    print("No build directory found. Running in development mode.")

app.include_router(user)