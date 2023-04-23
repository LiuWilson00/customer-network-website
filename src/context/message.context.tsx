import React, { createContext, useState, useCallback } from 'react';

interface Message {
    text: string;
    type: 'error' | 'info' | 'success';
}

interface MessageContextValue {
    showMessage: (text: string, type?: 'error' | 'info' | 'success') => void;
    message: Message | null;
    clearMessage: () => void;
}

export const MessageContext = createContext<MessageContextValue | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [message, setMessage] = useState<Message | null>(null);

    const clearMessage = useCallback(() => {
        setMessage(null);
    }, []);

    const showMessage = useCallback(
        (text: string, type: 'error' | 'info' | 'success' = 'info') => {
            setMessage({ text, type });

            setTimeout(() => {
                clearMessage();
            }, 2000);
        },
        [clearMessage]
    );

    return (
        <MessageContext.Provider value={{ showMessage, message, clearMessage }}>
            {children}
        </MessageContext.Provider>
    );
};
