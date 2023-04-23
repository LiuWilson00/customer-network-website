import React from 'react';
import { useMessage } from '@/hooks/use-message.hook';

export const MessageNotification: React.FC = () => {
    const { message, clearMessage } = useMessage();

    if (!message) {
        return null;
    }

    const { text, type } = message;
    const bgColor = type === 'error' ? 'bg-red-600' : type === 'success' ? 'bg-green-600' : 'bg-blue-600';

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded ${bgColor} text-white`}
            onClick={clearMessage}
        >
            {text}
        </div>
    );
};
