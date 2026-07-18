from fastapi import APIRouter, HTTPException

from app.core.security import hash_password
from app.models.user import User
from app.schemas.auth import RegisterRequest

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

@router.post("/register")
async def register_user(request: RegisterRequest):

    existing_user = await User.find_one(
        User.email == request.email
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )

    hashed_password = hash_password(request.password)

    user = User(
        full_name=request.full_name,
        student_id=request.student_id,
        email=request.email,
        hashed_password=hashed_password
    )

    await user.insert()

    print("✅ User inserted successfully!")
    print(user)

    return {
        "message": "User registered successfully."
    }