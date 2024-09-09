import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ClientLayout = lazy(() => import('src/presentation/modules/client'));

// Importation des panels
const ClientQueue = lazy(
    () => import('src/presentation/modules/client/panels/queue'),
);
const ClientTicket = lazy(
    () => import('src/presentation/modules/client/panels/ticket'),
);

// Importaion des pages de redirection
const ClientNotFound = lazy(
    () => import('src/presentation/modules/redirect/notFound/notFound'),
);

/**
 *
 * @desc: Configuration des routes pour les pages destinés au clients
 */
const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<ClientLayout />}>
                <Route index element={<ClientTicket />} />
                <Route path="/queue" element={<ClientQueue />} />
                <Route path="/ticket" element={<ClientTicket />} />
            </Route>

            {/* Page de redirection */}
            <Route path="*" element={<ClientNotFound />} />
        </Routes>
    );
};

export default ClientRoutes;
