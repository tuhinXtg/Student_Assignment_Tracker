from beanie import Document
from pydantic import EmailStr


class User(Document):
    full_name: str
    student_id: str
    email: EmailStr
    hashed_password: str

    class Settings:
        name = "users"