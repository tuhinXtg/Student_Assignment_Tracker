import { useState, type ChangeEvent, type FormEvent } from "react";
import AuthInput from "../auth/AuthInput";
import AuthButton from "../auth/AuthButton";

interface CourseFormProps {
    initialData?: {
        courseName: string;
        courseCode: string;
        instructor: string;
        semester: string;
    };
    onSubmit: (data: {
        course_name: string;
        course_code: string;
        instructor?: string;
        semester?: string;
    }) => Promise<void>;
    buttonText: string;
}

export default function CourseForm({
    initialData,
    onSubmit,
    buttonText,
}: CourseFormProps) {

    const [formData, setFormData] = useState({
        courseName: initialData?.courseName || "",
        courseCode: initialData?.courseCode || "",
        instructor: initialData?.instructor || "",
        semester: initialData?.semester || "",
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

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        if (!formData.courseName || !formData.courseCode) {
            setError("Course Name and Course Code are required.");
            return;
        }

        try {
            await onSubmit({
                course_name: formData.courseName,
                course_code: formData.courseCode,
                instructor: formData.instructor,
                semester: formData.semester,
            });

            setSuccess("Operation completed successfully!");

            setFormData({
                courseName: "",
                courseCode: "",
                instructor: "",
                semester: "",
            });

        } catch (error) {
            console.error(error);
            setError("Operation failed. Please try again.");
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

            <AuthButton text={buttonText} />
        </form>
    );
}