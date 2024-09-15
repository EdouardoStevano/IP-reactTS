import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 *
 * @desc: Interface du Page de redirection
 */
const RedirectionRoutes = () => {
    return (
        <div className="bg-[url('src/presentation/assets/image/abstract/point-background.webp')] dark:bg-[url('src/presentation/assets/image/abstract/card-background.webp')] bg-white dark:bg-slate-950 h-screen w-screen">
            <Outlet />
        </div>
    );
};

export default RedirectionRoutes;
