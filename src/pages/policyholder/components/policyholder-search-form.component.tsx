import React, { useState, FormEvent } from "react";

interface PolicyholderSearchFormProps {
    onSubmit: (id: string) => void;
}

const PolicyholderSearchForm: React.FC<PolicyholderSearchFormProps> = ({
    onSubmit,
}) => {
    const [id, setId] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(id);
        setId("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-black p-4 rounded-md"
        >
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter ID"
                    className="w-full px-4 py-2 text-white placeholder-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <button
                    type="submit"
                    disabled={!id}
                    className="px-4 py-2 font-bold text-black bg-blue-400 border border-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Search
                </button>

            </div>
        </form>
    );
};

export default PolicyholderSearchForm;
