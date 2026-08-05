import os
from beanie import init_beanie
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from app.models.user import User
from app.models.course import Course
from app.models.assignment import Assignment

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")

client = AsyncIOMotorClient(DATABASE_URL)
database = client[DATABASE_NAME]


async def init_db():
    await init_beanie(
        database=database,
        document_models=[
            User,
            Course,
            Assignment
        ]
    )