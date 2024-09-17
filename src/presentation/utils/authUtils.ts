// utils/authUtils.ts

/**
 * Enregistre le token, l'email et le mot de passe (hashé) dans le localStorage
 * si l'option "Remember Me" est activée.
 *
 * @param {string} token - Le token d'authentification.
 * @param {string} session - Session de l'utilisateur.
 * @param {string} password - Le mot de passe non hashé (pour l'exemple).
 * @param {boolean} rememberMe - Si "Remember Me" est activé ou non.
 */
export const saveAuthData = (
    token: string,
    session: string,
    password: string,
    rememberMe: boolean,
) => {
    if (rememberMe) {
        localStorage.setItem('token', token);
        localStorage.setItem('userSession', session);
        localStorage.setItem('welcomeMessageClosed', 'false');
        localStorage.setItem('userPassword', btoa(password)); // Hashage simple avec base64 (pour l'exemple)
    }
};

/**
 * Récupère les informations d'authentification depuis le localStorage.
 *
 * @returns {{ email: string | null, password: string | null }} L'email et le mot de passe décrypté.
 */
export const getAuthData = (): {
    session: string | null;
    password: string | null;
} => {
    const session = localStorage.getItem('userSession');
    const password = localStorage.getItem('userPassword')
        ? atob(localStorage.getItem('userPassword')!)
        : null; // Décode base64
    return { session, password };
};

/**
 * Supprime les informations d'authentification du localStorage.
 */
export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userSession');
    localStorage.removeItem('welcomeMessageClosed');
    localStorage.removeItem('userPassword');
};
