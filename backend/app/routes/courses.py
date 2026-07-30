from fastapi import APIRouter, HTTPException
from app.schemas.course import CourseCreate
from app.models.course import Course


router = APIRouter(
    prefix="/courses",
    tags=["Courses"]
)


@router.post("/")
async def create_course(course_data: CourseCreate):

    course = Course(
        course_name=course_data.course_name,
        course_code=course_data.course_code,
        instructor=course_data.instructor,
        semester=course_data.semester,
    )

    await course.insert()

    return {
        "message": "Course created successfully",
        "course": course
    }
    
@router.get("/")
async def get_courses():

    courses = await Course.find_all().to_list()

    return courses

@router.put("/{course_id}")
async def update_course(
    course_id: str,
    course_data: CourseCreate,
):
    course = await Course.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
        )

    course.course_name = course_data.course_name
    course.course_code = course_data.course_code
    course.instructor = course_data.instructor
    course.semester = course_data.semester

    await course.save()

    return {
        "message": "Course updated successfully",
        "course": course,
    }
    
    
@router.delete("/{course_id}")
async def delete_course(course_id: str):

    course = await Course.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
        )

    await course.delete()

    return {
        "message": "Course deleted successfully"
    }