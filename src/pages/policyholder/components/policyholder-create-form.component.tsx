import React, { useState, useRef, useEffect, FormEvent } from "react";
import { useMessage } from "@/hooks/use-message.hook";
interface PolicyholderCreateFormProps {
    onSubmit: (introducerId: string, name: string) => void;
    disabled: boolean;


}

const PolicyholderCreateForm: React.FC<PolicyholderCreateFormProps> = ({
    onSubmit,
    disabled,
}) => {
    const [introducerId, setIntroducerId] = useState("");
    const [name, setName] = useState("");
    const formRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);
    const { showMessage } = useMessage();
    const onCloseHandle = () => {
        setShow(false);
    };




    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            onSubmit(introducerId, name);
            setIntroducerId("");
            setName("");
        } catch (e: any) {
            showMessage(e.message, "error");
        } finally {
            showMessage("Policyholder created successfully", "success");
            setShow(false);
        }
    };



    return (
        <>
            {show ? <div
                ref={formRef}
                onClick={onCloseHandle}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
                <form
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={handleSubmit}
                    className="bg-black p-6 rounded-md space-y-4"
                >
                    <input
                        type="text"
                        value={introducerId}
                        onChange={(e) => setIntroducerId(e.target.value)}
                        placeholder="Enter Introducer ID"
                        className="w-full px-4 py-2 text-white placeholder-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        className="w-full px-4 py-2 text-white placeholder-white bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        disabled={!name}
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-black bg-blue-400 border border-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Create
                    </button>
                </form>
            </div> : <> </>}

            <button
                disabled={disabled}
                onClick={() => setShow(true)}
                className="px-4 py-2 font-bold text-black bg-blue-400 border border-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Create
            </button>
        </>
    );
};

export default PolicyholderCreateForm;
