export default function WelcomeCard() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-white rounded-xl shadow-md p-1">
            <h1 className="text-lg font-bold text-gray-800">
                👋 Welcome Back
            </h1>

            <p className="text-sm pl-7.5 text-gray-600">
                Today is {today}
            </p>
        </div>
    );
}