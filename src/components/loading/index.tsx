import React from "react";

interface LoadingProps {
    isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="animate-spin w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"></div>
        </div>
    );
};

export default Loading;
