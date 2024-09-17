import React, { useEffect, useState } from 'react';

import Bot from '../assets/image/illustrations/bot.png';

interface WelcomeMessageProps {
    username: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ username }) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        // Vérifier dans localStorage si le message a déjà été fermé
        const closed = localStorage.getItem('welcomeMessageClosed');
        if (closed === 'true') {
            setIsVisible(false);
        }
    }, []);

    const handleClose = () => {
        // Masquer le composant et enregistrer la fermeture dans localStorage
        setIsVisible(false);
        localStorage.setItem('welcomeMessageClosed', 'true');
    };

    if (!isVisible) return null; // Ne pas afficher le message si il est fermé

    return (
        <div className="fixed mx-5 bottom-5 sm:bottom-10 sm:right-10 bg-white dark:bg-slate-700 bg-opacity-60 shadow-lg rounded-3xl p-6 backdrop-blur-lg flex items-center space-x-4 transition transform  sm:w-[600px] z-40">
            {/* Message de bienvenue */}
            <div className="sm:w-[62%]">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                    Manahoana {username}!
                </h2>
                <p className="text-gray-600 text-[14px] dark:text-gray-400">
                    Bienvenue Ticketing Nous sommes ravis de vous accueillir
                    dans notre application de gestion de tickets qui simplifie
                    l’expérience en obtenant votre ticket en un clic, en restant
                    informé de votre progression en temps réel. Merci de nous
                    faire confiance pour gérer votre temps efficacement
                </p>
            </div>

            {/* Image */}
            <img
                src={Bot}
                alt={`Bienvenue ${username}`}
                className="hidden sm:flex w-64 -top-12 absolute right-0"
            />

            {/* Bouton de fermeture */}
            <button
                onClick={handleClose}
                className="absolute transition -top-4 -right-3 bg-primary text-slate-100 px-[10px] py-[5px] rounded-full hover:bg-primary-400 hover:scale-110 focus:outline-none"
            >
                ✕
            </button>
        </div>
    );
};

export default WelcomeMessage;
