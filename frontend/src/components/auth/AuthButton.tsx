interface AuthButtonProps {
    text: string;
    type?: "button" | "submit";
}

export default function AuthButton({
    text,
    type = "submit",
}: AuthButtonProps) {
    return (
        <button
            type={type}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
            {text}
        </button>
    );
}