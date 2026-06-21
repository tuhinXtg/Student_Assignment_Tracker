type InputProps = {
    label: string;
    type: string;
    placeholder: string;
};

export default function InputField({ label, type, placeholder }: InputProps) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}