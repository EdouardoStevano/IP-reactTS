import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Importation des routes de redirection
import Loader from 'src/presentation/modules/redirect/loader/loaderPage';

// importation des composants
import ConnectionStatus from 'src/presentation/components/connexionStatus/connectionStatus';

// Importaion des securisation des routes
import ProtectedRoute from 'src/infra/security/protectedRoutes';

// Page lobale
const Layout = lazy(() => import('src/presentation/modules'));

// Route principal par section de page
const AuthRoutes = lazy(() => import('./auth'));
const DashboardRoutes = lazy(() => import('./dashboad'));
const ClientRoutes = lazy(() => import('./client'));
const RedirectionRoutes = lazy(() => import('./redirect'));

// Importaion des pages de redirection
const NotFound = lazy(
    () => import('src/presentation/modules/redirect/notFound/notFound'),
);

/**
 *
 * @desc: Configuration global des routes
 */
const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                {/* Constant components */}
                <ConnectionStatus />

                <Routes>
                    {/* Rediriger de '/' vers '/auth' */}
                    <Route path="/" element={<Navigate to="/auth" replace />} />

                    <Route path="/" element={<Layout />}>
                        {/* Sous-routes pour Auth */}
                        <Route
                            path="auth/*"
                            element={
                                localStorage.getItem('token') ? (
                                    <Navigate to="/dashboard" replace />
                                ) : (
                                    <AuthRoutes />
                                )
                            }
                        />

                        {/* Sous-routes pour Dashboard */}
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="dashboard/*"
                                element={<DashboardRoutes />}
                            />

                            <Route
                                element={
                                    <ProtectedRoute
                                        requiredRoles={[
                                            'Call Center',
                                            'Agence',
                                        ]}
                                    />
                                }
                            >
                                <Route
                                    path="dashboard/test"
                                    element={<DashboardRoutes />}
                                />
                            </Route>
                        </Route>
                        {/* Sous-routes pour Client */}
                        <Route element={<ProtectedRoute />}>
                            <Route path="client/*" element={<ClientRoutes />} />
                        </Route>
                        {/* Sous-routes pour les redirections */}
                        <Route
                            path="redirect/*"
                            element={<RedirectionRoutes />}
                        />
                        {/* Routes des pages introuvable*/}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default RoutesConfig;
