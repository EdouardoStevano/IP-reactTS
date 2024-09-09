import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation des pages
const AuthHome = lazy(() => import('src/presentation/modules/auth'));

// Importaion des pages de redirection
const AuthNotFound = lazy(
    () => import('src/presentation/modules/redirect/notFound/notFound'),
);

/**
 *
 * @desc: Configuration des routes pour l'authentification
 */
const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<AuthHome />} />

            {/* Page de redirection */}
            <Route path="**" element={<AuthNotFound />} />
        </Routes>
    );
};

export default AuthRoutes;
