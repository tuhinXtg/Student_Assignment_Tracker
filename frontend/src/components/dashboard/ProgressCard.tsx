export default function ProgressCard() {
    const completionPercentage = 0;

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                    Assignment Progress
                </h2>

                <span className="text-sm font-medium text-gray-600">
                    {completionPercentage}%
                </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${completionPercentage}%` }}
                />
            </div>

            <p className="text-sm text-gray-500 mt-3">
                Complete your assignments to increase your progress.
            </p>
        </div>
    );
}