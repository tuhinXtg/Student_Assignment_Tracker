from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database.connection import init_db
from app.routes.auth import router as auth_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    print("✅ MongoDB Connected Successfully!")

    yield

    print("❌ MongoDB Connection Closed.")

app = FastAPI(
    title="Student Assignment Tracker API",
    lifespan=lifespan,
)

app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Student Assignment Tracker API is running!"
    }