import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Utilisation de l'export nommé

// Simulez une méthode pour récupérer le token d'authentification
const getToken = () => {
    const tokenString = localStorage.getItem('token');
    if (tokenString) {
        try {
            const token = JSON.parse(tokenString);
            return token;
        } catch (e) {
            console.error('Erreur lors de la récupération du token:', e);
            return null;
        }
    }
    return null;
};

// Interface pour le contenu décodé du token (ajustez en fonction de la structure de votre token)
interface DecodedToken {
    role_name: string; // Assumez que le token contient un champ 'role'
    exp: number; // Expiration du token (optionnel)
}

// Fonction pour décoder le token et obtenir les informations de rôle
const getRoleFromToken = (): string | null => {
    const token = getToken();
    if (!token) return null;

    try {
        const decodedToken = jwtDecode<DecodedToken>(token.access);
        return decodedToken.role_name; // Extraire le rôle du token
    } catch (error) {
        console.error('Erreur lors du décodage du token :', error);
        return null;
    }
};
interface ProtectedRouteProps {
    requiredRoles?: string[]; // Acceptation d'un tableau de rôles
}

/**
 * @desc Composant pour protéger les routes
 * @param requiredRoles Tableau de rôles requis pour accéder à la route
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    requiredRoles = [],
}) => {
    const token = getToken();
    const userRole = getRoleFromToken();

    // Redirection si l'utilisateur n'est pas authentifié
    if (!token) {
        return <Navigate to="/auth" replace />;
    }

    // Redirection si l'utilisateur n'a pas l'un des rôles requis
    if (requiredRoles.length > 0 && !requiredRoles.includes(userRole || '')) {
        return <Navigate to="/not-authorized" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
