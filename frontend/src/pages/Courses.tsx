import { useEffect, useState } from "react";
import {
    getCourses,
    deleteCourse,
} from "../services/courses.ts";

interface Course {
    _id?: string;
    course_name: string;
    course_code: string;
    instructor?: string;
    semester?: string;
}

export default function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState("");

    const loadCourses = async () => {
        try {
            const data = await getCourses();
            setCourses(data);
        } catch (error) {
            console.error(error);
            setError("Failed to load courses.");
        }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (error) {
                console.error(error);
                setError("Failed to load courses.");
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (courseId: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await deleteCourse(courseId);

            // Refresh the course list
            await loadCourses();
        } catch (error) {
            console.error(error);
            alert("Failed to delete course.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                My Courses
            </h1>

            {error && (
                <p className="text-red-600 mb-4">
                    {error}
                </p>
            )}

            {courses.length === 0 ? (
                <p>No courses available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course._id}
                            className="bg-white rounded-xl shadow-md p-6"
                        >
                            <h2 className="text-xl font-bold">
                                {course.course_name}
                            </h2>

                            <p>
                                <strong>Code:</strong> {course.course_code}
                            </p>

                            <p>
                                <strong>Instructor:</strong>{" "}
                                {course.instructor || "N/A"}
                            </p>

                            <p>
                                <strong>Semester:</strong>{" "}
                                {course.semester || "N/A"}
                            </p>

                            <div className="flex gap-3 mt-5">
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(course._id!)}
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