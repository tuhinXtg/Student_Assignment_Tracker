import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AssignmentForm from "../components/assignment/AssignmentForm";
import {
    getAssignmentById,
    updateAssignment,
} from "../services/assignments";

interface Assignment {
    title: string;
    description: string;
    dueDate: string;
    status: string;
    priority: string;
    courseId: string;
}

export default function EditAssignment() {

    const { assignmentId } = useParams();
    const navigate = useNavigate();

    const [assignment, setAssignment] = useState<Assignment | null>(null);

    useEffect(() => {

        const loadAssignment = async () => {

            if (!assignmentId) return;

            try {

                const data = await getAssignmentById(assignmentId);

                setAssignment({
                    title: data.title,
                    description: data.description,
                    dueDate: data.due_date,
                    status: data.status,
                    priority: data.priority,
                    courseId: data.course_id,
                });

            } catch (error) {

                console.error(error);
                alert("Failed to load assignment.");

            }

        };

        loadAssignment();

    }, [assignmentId]);

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Edit Assignment
            </h1>

            {!assignment ? (

                <p>Loading...</p>

            ) : (

                <AssignmentForm
                    initialData={assignment}
                    buttonText="Update Assignment"
                    onSubmit={async (data) => {

                        if (!assignmentId) return;

                        await updateAssignment(
                            assignmentId,
                            data
                        );

                        alert("Assignment updated successfully!");

                        navigate("/assignments");

                    }}
                />

            )}

        </div>
    );
}