import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getAssignments,
    deleteAssignment,
} from "../services/assignments.ts";

interface Assignment {
    _id?: string;
    title: string;
    description: string;
    due_date: string;
    status: string;
    priority: string;
    course_id: string;
}

export default function Assignments() {
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loadAssignments = async () => {
        try {
            const data = await getAssignments();
            setAssignments(data);
        } catch (error) {
            console.error(error);
            setError("Failed to load assignments.");
        }
    };

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const data = await getAssignments();
                setAssignments(data);
            } catch (error) {
                console.error(error);
                setError("Failed to load assignments.");
            }
        };

        fetchAssignments();
    }, []);

    const handleDelete = async (assignmentId: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this assignment?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await deleteAssignment(assignmentId);
            await loadAssignments();
        } catch (error) {
            console.error(error);
            alert("Failed to delete assignment.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                My Assignments
            </h1>

            {error && (
                <p className="text-red-600 mb-4">
                    {error}
                </p>
            )}

            {assignments.length === 0 ? (
                <p>No assignments available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {assignments.map((assignment) => (
                        <div
                            key={assignment._id}
                            className="bg-white rounded-xl shadow-md p-6"
                        >
                            <h2 className="text-xl font-bold">
                                {assignment.title}
                            </h2>

                            <p>
                                <strong>Description:</strong>{" "}
                                {assignment.description}
                            </p>

                            <p>
                                <strong>Due Date:</strong>{" "}
                                {new Date(
                                    assignment.due_date
                                ).toLocaleString()}
                            </p>

                            <p>
                                <strong>Status:</strong>{" "}
                                {assignment.status}
                            </p>

                            <p>
                                <strong>Priority:</strong>{" "}
                                {assignment.priority}
                            </p>

                            <div className="flex gap-3 mt-5">
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/edit-assignment/${assignment._id}`
                                        )
                                    }
                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        handleDelete(
                                            assignment._id!
                                        )
                                    }
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}