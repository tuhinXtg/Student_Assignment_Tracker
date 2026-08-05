from fastapi import APIRouter, Depends, HTTPException

from app.core.dependencies import get_current_user
from app.models.assignment import Assignment
from app.models.user import User
from app.schemas.assignment import AssignmentCreate, AssignmentUpdate

router = APIRouter(
    prefix="/assignments", 
    tags=["Assignments"]
    )

@router.post("/")
async def create_assignment(
    assignment_data: AssignmentCreate,
    current_user: User = Depends(get_current_user),
):

    assignment = Assignment(
        title=assignment_data.title,
        description=assignment_data.description,
        due_date=assignment_data.due_date,
        status=assignment_data.status,
        priority=assignment_data.priority,
        course_id=assignment_data.course_id,
        user_id=current_user.id,
    )

    await assignment.insert()

    return {
        "message": "Assignment created successfully",
        "assignment": assignment,
    }
    
    
@router.get("/")
async def get_assignments(
    current_user: User = Depends(get_current_user),
):

    assignments = await Assignment.find(
        Assignment.user_id == current_user.id
    ).to_list()

    return assignments

@router.get("/{assignment_id}")
async def get_assignment(
    assignment_id: str,
    current_user: User = Depends(get_current_user),
):

    assignment = await Assignment.get(assignment_id)

    if not assignment:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found",
        )

    if assignment.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You are not authorized to view this assignment.",
        )

    return assignment

@router.put("/{assignment_id}")
async def update_assignment(
    assignment_id: str,
    assignment_data: AssignmentUpdate,
    current_user: User = Depends(get_current_user),
):

    assignment = await Assignment.get(assignment_id)

    if not assignment:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found",
        )

    if assignment.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You are not authorized to update this assignment.",
        )

    update_data = assignment_data.model_dump(exclude_unset=True)

    for field, value in update_data.items():
        setattr(assignment, field, value)

    await assignment.save()

    return {
        "message": "Assignment updated successfully",
        "assignment": assignment,
    }
    
@router.delete("/{assignment_id}")
async def delete_assignment(
    assignment_id: str,
    current_user: User = Depends(get_current_user),
):

    assignment = await Assignment.get(assignment_id)

    if not assignment:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found",
        )

    if assignment.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You are not authorized to delete this assignment.",
        )

    await assignment.delete()

    return {
        "message": "Assignment deleted successfully",
    }