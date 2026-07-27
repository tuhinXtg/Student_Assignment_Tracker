export default function QuickActions() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-blue-400 text-white text-xl rounded-lg px-3 py-3 hover:bg-blue-500 transition">
                    ➕ Add Assignment
                </button>

                <button className="bg-green-500 text-white text-xl rounded-lg px-4 py-3 hover:bg-green-600 transition">
                    📚 Add Course
                </button>

                <button className="bg-gray-500 text-white text-xl rounded-lg px-4 py-3 hover:bg-gray-800 transition">
                    📋 View Assignments
                </button>
            </div>
        </div>
    );
}