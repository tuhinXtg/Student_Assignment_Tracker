export default function WelcomeCard() {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800">
                👋 Welcome Back
            </h1>

            <p className="mt-2 text-gray-600">
                Today is {today}
            </p>
        </div>
    );
}