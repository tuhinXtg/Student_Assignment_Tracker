from fastapi import APIRouter, HTTPException

from app.core.jwt import create_access_token
from app.core.security import hash_password, verify_password
from app.models.user import User
from app.schemas.auth import LoginRequest, RegisterRequest


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


@router.post("/login")
async def login_user(request: LoginRequest):

    user = await User.find_one(
        User.email == request.email
    )

    if not user:
        raise HTTPException(
            status_code=400,
            detail="Invalid email or password."
        )

    password_valid = verify_password(
        request.password,
        user.hashed_password
    )

    if not password_valid:
        raise HTTPException(
            status_code=400,
            detail="Invalid email or password."
        )

    access_token = create_access_token(
        {
            "user_id": str(user.id),
            "email": user.email,
        }
    )

    return {
        "message": "Login successful.",
        "access_token": access_token,
        "token_type": "bearer"
    }