import React, { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation des pages
const DashboardHome = lazy(() => import('src/presentation/modules/dashboard'));

// Importaion des pages de redirection
const DashboardNotFound = lazy(
    () => import('src/presentation/modules/redirect/notFound/notFound'),
);

/**
 *
 * @desc: Configuration des routes pour le dashboard
 */
const DashboardRoutes: FC = () => {
    return (
        <Routes>
            <Route path="" element={<DashboardHome />} />

            {/* Page de redirection */}
            <Route path="*" element={<DashboardNotFound />} />
        </Routes>
    );
};

export default DashboardRoutes;
