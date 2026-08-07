from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import init_db
from app.routes.auth import router as auth_router
from app.routes.courses import router as courses_router
from app.routes.assignment import router as assignments_router


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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://student-assignment-tracker-black.vercel.app",
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(courses_router)
app.include_router(assignments_router)


@app.get("/")
def root():
    return {
        "message": "Student Assignment Tracker API is running!"
    }