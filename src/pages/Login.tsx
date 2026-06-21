import { Link } from "react-router-dom";
import InputField from "../components/InputField";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-indigo-200">
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-600">
                        Student Assignment Tracker
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your assignments easily
                    </p>
                </div>


                <form className="space-y-5">

                    <InputField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                    />


                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"> Login
                    </button>

                </form>
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold ml-1"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}