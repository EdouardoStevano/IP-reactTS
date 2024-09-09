import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 *
 * @desc: Interface du Page d'authentification
 */
const ClientPage = () => {
    return (
        <div className="tick-container bg-custom-background h-screen w-screen">
            <Outlet />
        </div>
    );
};

export default ClientPage;
