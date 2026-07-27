import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { loginUser } from "../services/auth";

export default function Login() {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const newErrors = {
            email: "",
            password: "",
        };

        if (!formData.email) {
            newErrors.email = "Email is required.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);

        if (
            newErrors.email ||
            newErrors.password
        ) {
            return;
        }

        try {
            const response = await loginUser({
                email: formData.email,
                password: formData.password,
            });

            localStorage.setItem(
                "access_token",
                response.access_token
            );

            console.log(
                "Stored Token:",
                localStorage.getItem("access_token")
            );
            console.log(response);

            navigate("/dashboard")

        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Login failed.");
            }
        }
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to your Student Assignment Tracker account"
        >
            <form onSubmit={handleSubmit}>
                <AuthInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

                <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                </p>

                <AuthInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />

                <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                </p>

                <div className="mt-6">
                    <AuthButton text="Login" />
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
}