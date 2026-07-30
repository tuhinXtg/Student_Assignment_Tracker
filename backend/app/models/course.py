from beanie import Document
from typing import Optional


class Course(Document):
    course_name: str
    course_code: str
    instructor: Optional[str] = None
    semester: Optional[str] = None


    class Settings:
        name = "courses"