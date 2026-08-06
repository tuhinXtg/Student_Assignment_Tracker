import AssignmentForm from "../components/assignment/AssignmentForm";
import { createAssignment } from "../services/assignments";

export default function AddAssignment() {

    const handleCreateAssignment = async (data: {
        title: string;
        description: string;
        due_date: string;
        status: string;
        priority: string;
        course_id: string;
    }) => {
        await createAssignment(data);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Add Assignment
            </h1>

            <AssignmentForm
                onSubmit={handleCreateAssignment}
                buttonText="Add Assignment"
            />
        </div>
    );
}