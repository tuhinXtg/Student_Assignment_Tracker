from pydantic import BaseModel, EmailStr


class RegisterRequest(BaseModel):
    full_name: str
    student_id: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str