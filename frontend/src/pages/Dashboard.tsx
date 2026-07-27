import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import ProgressCard from "../components/dashboard/ProgressCard";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold">
                <WelcomeCard />

                <StatisticsCards />

                <ProgressCard />
            </h1>
        </div>
    );
}