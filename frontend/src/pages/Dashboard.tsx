import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import ProgressCard from "../components/dashboard/ProgressCard";
import QuickActions from "../components/dashboard/QuickActions";

import { type AssignmentData, getAssignments } from "../services/assignments";

interface DashboardStats {
    total: number;
    pending: number;
    completed: number;
    overdue: number;
}

interface Assignment extends AssignmentData {
    _id: string;
}

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardStats>({
        total: 0,
        pending: 0,
        completed: 0,
        overdue: 0,
    });

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    useEffect(() => {
        async function loadStatistics() {
            try {
                const assignments = (await getAssignments()) as Assignment[];

                const total = assignments.length;

                const pending = assignments.filter(
                    (assignment) => assignment.status === "Pending"
                ).length;

                const completed = assignments.filter(
                    (assignment) => assignment.status === "Completed"
                ).length;

                const overdue = assignments.filter((assignment) => {
                    return (
                        assignment.status !== "Completed" &&
                        new Date(assignment.due_date) < new Date()
                    );
                }).length;

                setStats({
                    total,
                    pending,
                    completed,
                    overdue,
                });
            } catch (error) {
                console.error("Failed to load dashboard statistics:", error);
            }
        }

        loadStatistics();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                    <WelcomeCard />
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-red-400 text-white text-xl font-medium px-5 py-3.5 rounded-xl hover:bg-red-600 transition w-full md:w-auto"
                >
                    Logout
                </button>
            </div>

            <QuickActions />

            <StatisticsCards stats={stats} />

            <ProgressCard />
        </div>
    );
}