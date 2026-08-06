import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import AuthInput from "../auth/AuthInput";
import { getCourses } from "../../services/courses.ts";
import AuthButton from "../auth/AuthButton";

interface Course {
    _id: string;
    course_name: string;
}

interface AssignmentFormProps {
    initialData?: {
        title: string;
        description: string;
        dueDate: string;
        status: string;
        priority: string;
        courseId: string;
    };
    onSubmit: (data: {
        title: string;
        description: string;
        due_date: string;
        status: string;
        priority: string;
        course_id: string;
    }) => Promise<void>;
    buttonText: string;
}

export default function AssignmentForm({
    initialData,
    onSubmit,
    buttonText,
}: AssignmentFormProps) {

    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        dueDate: initialData?.dueDate || "",
        status: initialData?.status || "",
        priority: initialData?.priority || "",
        courseId: initialData?.courseId || "",
    });

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function loadCourses() {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadCourses();
    }, []);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
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

        if (
            !formData.title ||
            !formData.description ||
            !formData.dueDate ||
            !formData.status ||
            !formData.priority ||
            !formData.courseId
        ) {
            setError("All fields are required.");
            return;
        }

        try {
            await onSubmit({
                title: formData.title,
                description: formData.description,
                due_date: formData.dueDate,
                status: formData.status,
                priority: formData.priority,
                course_id: formData.courseId,
            });

            setSuccess("Operation completed successfully!");

            setFormData({
                title: "",
                description: "",
                dueDate: "",
                status: "",
                priority: "",
                courseId: "",
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
                label="Title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter assignment title"
            />

            <AuthInput
                label="Description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter assignment description"
            />

            <AuthInput
                label="Due Date"
                type="datetime-local"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                placeholder="Select due date and time"
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                </label>

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleSelectChange}
                    className="w-full rounded-lg border border-gray-300 p-3"
                >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                </label>

                <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleSelectChange}
                    className="w-full rounded-lg border border-gray-300 p-3"
                >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course
                </label>

                <select
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleSelectChange}
                    className="w-full rounded-lg border border-gray-300 p-2"
                >
                    <option value="">
                        Select a Course
                    </option>

                    {courses.map((course) => (
                        <option
                            key={course._id}
                            value={course._id}
                        >
                            {course.course_name}
                        </option>
                    ))}
                </select>
            </div>

            <AuthButton text={buttonText} />
        </form>
    );
}