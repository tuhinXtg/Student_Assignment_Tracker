import { useNavigate } from "react-router-dom";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import ProgressCard from "../components/dashboard/ProgressCard";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login");
    };

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

            {/* <WelcomeCard /> */}

            <QuickActions />

            <StatisticsCards />

            <ProgressCard />
        </div>
    );
}