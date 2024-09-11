// src/interceptors/axiosInterceptor.ts
import axios from 'axios';

// Création de l'instance Axios
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // URL de base de ton API
    timeout: 10000, // Timeout pour les requêtes
});

// Intercepteur pour les requêtes (Request)
axiosInstance.interceptors.request.use(
    (config) => {
        // Ajoute le token d'authentification à chaque requête
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Gestion des erreurs avant que la requête ne soit envoyée
        return Promise.reject(error);
    },
);

// Intercepteur pour les réponses (Response)
axiosInstance.interceptors.response.use(
    (response) => {
        // Gestion des réponses réussies
        return response;
    },
    (error) => {
        // Gestion des erreurs de réponse
        if (error.response.status === 401) {
            // Rediriger l'utilisateur vers la page de connexion si non autorisé
            window.location.href = '/';
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
