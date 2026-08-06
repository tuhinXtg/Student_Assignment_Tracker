import { useNavigate } from "react-router-dom";

export default function QuickActions() {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                <button
                    onClick={() => navigate("/add-assignment")}
                    className="bg-blue-400 text-white text-xl rounded-lg px-3 py-3 hover:bg-blue-500 transition"
                >
                    ➕ Add Assignment
                </button>

                <button
                    onClick={() => navigate("/add-course")}
                    className="bg-green-500 text-white text-xl rounded-lg px-4 py-3 hover:bg-green-600 transition"
                >
                    📚 Add Course
                </button>

                <button
                    onClick={() => navigate("/courses")}
                    className="bg-purple-500 text-white text-xl rounded-lg px-4 py-3 hover:bg-purple-600 transition"
                >
                    📖 View Courses
                </button>

                <button
                    onClick={() => navigate("/assignments")}
                    className="bg-gray-500 text-white text-xl rounded-lg px-4 py-3 hover:bg-gray-800 transition"
                >
                    📋 View Assignments
                </button>

            </div>
        </div>
    );
}