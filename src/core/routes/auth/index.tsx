import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation du page
const AuthLayout = lazy(() => import('src/presentation/modules/auth'));

// Importation des panels
const AuthSignIn = lazy(
    () => import('src/presentation/modules/auth/panels/signIn'),
);

const AuthForgotPassword = lazy(
    () => import('src/presentation/modules/auth/panels/forgetPassword'),
);

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
            <Route path="" element={<AuthLayout />}>
                <Route index element={<AuthSignIn />} />
                <Route
                    path="forgot-password"
                    element={<AuthForgotPassword />}
                />
            </Route>

            {/* Page de redirection */}
            <Route path="**" element={<AuthNotFound />} />
        </Routes>
    );
};

export default AuthRoutes;
