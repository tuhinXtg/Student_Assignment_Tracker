from fastapi import APIRouter, HTTPException, Depends

from app.core.dependencies import get_current_user
from app.models.user import User
from app.schemas.course import CourseCreate
from app.models.course import Course


router = APIRouter(
    prefix="/courses",
    tags=["Courses"]
)


@router.post("/")
async def create_course(
    course_data: CourseCreate,
    current_user: User = Depends(get_current_user),
):

    course = Course(
        course_name=course_data.course_name,
        course_code=course_data.course_code,
        instructor=course_data.instructor,
        semester=course_data.semester,
        user_id=current_user.id,
    )

    await course.insert()

    return {
        "message": "Course created successfully",
        "course": course,
    }


@router.get("/")
async def get_courses(
    current_user: User = Depends(get_current_user),
):

    courses = await Course.find(
        Course.user_id == current_user.id
    ).to_list()

    return courses

@router.get("/{course_id}")
async def get_course(
    course_id: str,
    current_user: User = Depends(get_current_user),
):

    course = await Course.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
        )

    if course.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You are not authorized to view this course.",
        )

    return course

@router.put("/{course_id}")
async def update_course(
    course_id: str,
    course_data: CourseCreate,
    current_user: User = Depends(get_current_user),
):

    course = await Course.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
        )

    if course.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You are not authorized to update this course.",
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
async def delete_course(
    course_id: str,
    current_user: User = Depends(get_current_user),
):

    course = await Course.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
        )

    if course.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You are not authorized to delete this course.",
        )

    await course.delete()

    return {
        "message": "Course deleted successfully",
    }