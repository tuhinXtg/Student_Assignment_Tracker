from beanie import Document, PydanticObjectId
from typing import Optional


class Course(Document):
    course_name: str
    course_code: str
    instructor: Optional[str] = None
    semester: Optional[str] = None

    user_id: PydanticObjectId

    class Settings:
        name = "courses"