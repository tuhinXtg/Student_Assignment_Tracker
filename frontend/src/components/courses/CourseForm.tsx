import { useState, type ChangeEvent, type FormEvent } from "react";
import AuthInput from "../auth/AuthInput";
import AuthButton from "../auth/AuthButton";
import { createCourse } from "../../services/courses.ts";

export default function CourseForm() {
    const [formData, setFormData] = useState({
        courseName: "",
        courseCode: "",
        instructor: "",
        semester: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        if (!formData.courseName || !formData.courseCode) {
            setError("Course Name and Course Code are required.");
            return;
        }

        try {
            const response = await createCourse({
                course_name: formData.courseName,
                course_code: formData.courseCode,
                instructor: formData.instructor,
                semester: formData.semester,
            });

            console.log("Course created:", response);

            setSuccess("Course added successfully!");

            setFormData({
                courseName: "",
                courseCode: "",
                instructor: "",
                semester: "",
            });

        } catch (error) {
            setError("Failed to add course. Please try again.");
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 space-y-4"
        >

            {error && (
                <p className="text-red-600">
                    {error}
                </p>
            )}


            {success && (
                <p className="text-green-600">
                    {success}
                </p>
            )}

            <AuthInput
                label="Course Name"
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                placeholder="Enter course name"
            />

            <AuthInput
                label="Course Code"
                type="text"
                name="courseCode"
                value={formData.courseCode}
                onChange={handleChange}
                placeholder="Enter course code"
            />

            <AuthInput
                label="Instructor (Optional)"
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                placeholder="Enter instructor name"
            />

            <AuthInput
                label="Semester (Optional)"
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                placeholder="Enter semester"
            />

            <AuthButton text="Add Course" />
        </form>
    );
}