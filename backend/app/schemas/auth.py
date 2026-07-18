from pydantic import BaseModel, EmailStr


class RegisterRequest(BaseModel):
    full_name: str
    student_id: str
    email: EmailStr
    password: str