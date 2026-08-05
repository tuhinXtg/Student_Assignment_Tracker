from datetime import datetime

from beanie import Document, PydanticObjectId
from pydantic import Field


class Assignment(Document):
    title: str
    description: str | None = None
    due_date: datetime
    status: str = Field(default="Pending")
    priority: str = Field(default="Medium")
    course_id: PydanticObjectId
    user_id: PydanticObjectId

    class Settings:
        name = "assignments"