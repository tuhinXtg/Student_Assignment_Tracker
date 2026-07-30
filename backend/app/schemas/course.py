from pydantic import BaseModel
from typing import Optional


class CourseCreate(BaseModel):
    course_name: str
    course_code: str
    instructor: Optional[str] = None
    semester: Optional[str] = None