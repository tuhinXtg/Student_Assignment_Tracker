import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

export default function Register() {
    return (
        <AuthLayout
            title="Create Account"
            subtitle="Create your Student Assignment Tracker account"
        >
            <form>
                <AuthInput
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                />

                <AuthInput
                    label="Student ID"
                    type="text"
                    placeholder="Enter your student ID"
                />

                <AuthInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                />

                <AuthInput
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                />

                <AuthInput
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                />

                <div className="mt-6">
                    <AuthButton text="Create Account" />
                </div>
            </form>
        </AuthLayout>
    );
}