import CourseForm from "../components/courses/CourseForm.tsx";
import { createCourse } from "../services/courses";

export default function AddCourse() {

    const handleCreateCourse = async (data: {
        course_name: string;
        course_code: string;
        instructor?: string;
        semester?: string;
    }) => {
        await createCourse(data);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Add Course
            </h1>

            <CourseForm
                onSubmit={handleCreateCourse}
                buttonText="Add Course"
            />
        </div>
    );
}