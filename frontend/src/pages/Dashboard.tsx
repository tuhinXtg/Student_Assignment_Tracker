import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import ProgressCard from "../components/dashboard/ProgressCard";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold">
                <div className="">
                    <WelcomeCard />
                    <QuickActions />
                </div>
                {/* <WelcomeCard /> */}

                <StatisticsCards />

                <ProgressCard />

                {/* <QuickActions /> */}
            </h1>
        </div>
    );
}