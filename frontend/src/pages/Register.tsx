import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { registerUser } from "../services/auth";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        studentId: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        studentId: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newErrors = {
            fullName: "",
            studentId: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        if (!formData.fullName) {
            newErrors.fullName = "Full Name is required.";
        }

        if (!formData.studentId) {
            newErrors.studentId = "Student ID is required.";
        }

        if (!formData.email) {
            newErrors.email = "Email is required.";
        }

        if (formData.email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required.";
        }

        if (
            formData.password &&
            formData.password.length < 8
        ) {
            newErrors.password =
                "Password must be at least 8 characters.";
        }

        if (
            formData.password &&
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword
        ) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);

        if (
            newErrors.fullName ||
            newErrors.studentId ||
            newErrors.email ||
            newErrors.password ||
            newErrors.confirmPassword
        ) {
            return;
        }

        try {
            const response = await registerUser({
                full_name: formData.fullName,
                student_id: formData.studentId,
                email: formData.email,
                password: formData.password,
            });

            // console.log("Account created successfully!");
            console.log(response);
            navigate("/login")

            setFormData({
                fullName: "",
                studentId: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Registration failed.");
            }
        }
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Create your Student Assignment Tracker account"
        >
            <form onSubmit={handleSubmit}>
                <AuthInput
                    label="Full Name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                />
                <p className="text-red-500 text-sm mt-1">
                    {errors.fullName}
                </p>

                <AuthInput
                    label="Student ID"
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter your student ID"
                />
                <p className="text-red-500 text-sm mt-1">
                    {errors.studentId}
                </p>

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

                <AuthInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                />
                <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                </p>

                <div className="mt-6">
                    <AuthButton text="Create Account" />
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
}