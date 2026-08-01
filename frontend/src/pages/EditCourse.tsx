import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CourseForm from "../components/courses/CourseForm.tsx";
import {
    getCourseById,
    updateCourse,
} from "../services/courses";

interface Course {
    courseName: string;
    courseCode: string;
    instructor: string;
    semester: string;
}

export default function EditCourse() {

    const { courseId } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {

        const loadCourse = async () => {

            if (!courseId) return;

            try {

                const data = await getCourseById(courseId);

                setCourse({
                    courseName: data.course_name,
                    courseCode: data.course_code,
                    instructor: data.instructor || "",
                    semester: data.semester || "",
                });

            } catch (error) {

                console.error(error);
                alert("Failed to load course.");

            }

        };

        loadCourse();

    }, [courseId]);

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Edit Course
            </h1>

            {!course ? (

                <p>Loading...</p>

            ) : (

                <CourseForm
                    initialData={course}
                    buttonText="Update Course"
                    onSubmit={async (data) => {

                        if (!courseId) return;

                        await updateCourse(
                            courseId,
                            data
                        );

                        alert("Course updated successfully!");

                        navigate("/courses");

                    }}
                />

            )}

        </div>
    );
}