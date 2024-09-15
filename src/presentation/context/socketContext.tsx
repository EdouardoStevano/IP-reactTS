// socketContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode  } from 'react';
import { io, Socket } from 'socket.io-client';

// Type pour le contexte du Socket
type SocketContextType = {
    socket: Socket | null;
};

// Définir le type des propriétés du composant, y compris `children`
interface SocketProviderProps {
    children: ReactNode;
}

// Création du contexte
const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error('useSocket doit être combiner avec SocketProvider');
    }
    return context;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    const projetUrl = process.env.REACT_APP_URL || 'http://localhost:3000';

    useEffect(() => {
        // Connexion au serveur Socket.IO
        const newSocket = io(projetUrl);
        setSocket(newSocket);

        return () => {
            newSocket.close(); // Ferme la connexion lors du démontage du composant
        };
    }, [projetUrl]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
