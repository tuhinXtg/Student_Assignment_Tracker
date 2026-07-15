interface AuthInputProps {
    label: string;
    type: string;
    placeholder: string;
}

export default function AuthInput({
    label,
    type,
    placeholder,
}: AuthInputProps) {
    return (
        <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}