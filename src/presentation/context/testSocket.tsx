// ChatComponent.tsx
import React, { useEffect, useState } from 'react';
import { useSocket } from './socketContext';

const ChatComponent: React.FC = () => {
    const { socket } = useSocket();
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        if (socket) {
            // Écoute les messages du serveur
            socket.on('message', (message: string) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }

        // Nettoyage lors du démontage
        return () => {
            socket?.off('message');
        };
    }, [socket]);

    const sendMessage = () => {
        if (socket && newMessage) {
            socket.emit('message', newMessage); // Envoie le message au serveur
            setNewMessage('');
        }
    };

    return (
        <div>
            <div>
                <h2>Chat en temps réel</h2>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Envoyer</button>
        </div>
    );
};

export default ChatComponent;
