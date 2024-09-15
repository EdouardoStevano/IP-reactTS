import React, { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importation du page
const DashboardLayout = lazy(
    () => import('src/presentation/modules/dashboard'),
);

// Importation des panels
const DashboardHome = lazy(
    () => import('src/presentation/modules/dashboard/panels/home'),
);
const DashboardBox = lazy(
    () => import('src/presentation/modules/dashboard/panels/box'),
);
const DashboardDispatch = lazy(
    () => import('src/presentation/modules/dashboard/panels/dispatch'),
);
const DashboardUsers = lazy(
    () => import('src/presentation/modules/dashboard/panels/users'),
);

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
            <Route path="" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="home" element={<DashboardHome />} />
                <Route path="users" element={<DashboardUsers />} />
                <Route path="box" element={<DashboardBox />} />
                <Route path="dispatch" element={<DashboardDispatch />} />
            </Route>

            {/* Page de redirection */}
            <Route path="*" element={<DashboardNotFound />} />
        </Routes>
    );
};

export default DashboardRoutes;
