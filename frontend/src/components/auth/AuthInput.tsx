import type { ChangeEvent } from "react";

interface AuthInputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
}: AuthInputProps) {
    return (
        <div className="mb-4">
            <label className="block mb-2 font-medium">
                {label}
            </label>

            <input
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}