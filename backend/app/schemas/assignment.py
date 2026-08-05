from datetime import datetime

from beanie import PydanticObjectId
from pydantic import BaseModel


class AssignmentCreate(BaseModel):
    title: str
    description: str | None = None
    due_date: datetime
    status: str = "Pending"
    priority: str = "Medium"
    course_id: PydanticObjectId


class AssignmentUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    due_date: datetime | None = None
    status: str | None = None
    priority: str | None = None
    course_id: PydanticObjectId | None = None


class AssignmentResponse(BaseModel):
    id: PydanticObjectId
    title: str
    description: str | None = None
    due_date: datetime
    status: str
    priority: str
    course_id: PydanticObjectId
    user_id: PydanticObjectId

    class Config:
        from_attributes = True