interface StatisticsCardsProps {
    stats: {
        total: number;
        pending: number;
        completed: number;
        overdue: number;
    };
}

export default function StatisticsCards({
    stats,
}: StatisticsCardsProps) {
    const statistics = [
        {
            title: "Total Assignments",
            value: stats.total,
        },
        {
            title: "Pending",
            value: stats.pending,
        },
        {
            title: "Completed",
            value: stats.completed,
        },
        {
            title: "Overdue",
            value: stats.overdue,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {statistics.map((stat) => (
                <div
                    key={stat.title}
                    className="bg-white rounded-xl shadow-md p-6"
                >
                    <h2 className="text-gray-500 text-sm font-medium">
                        {stat.title}
                    </h2>

                    <p className="text-3xl font-bold text-gray-800 mt-2">
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    );
}