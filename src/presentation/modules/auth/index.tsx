import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 *
 * @desc: Interface du Page d'authentification
 */
const AuthPage = () => {
    return (
        <div className="bg-[url('src/presentation/assets/image/abstract/point-background.webp')] dark:bg-[url('src/presentation/assets/image/abstract/point-background-dark.webp')] bg-white dark:bg-slate-950 h-screen w-screen">
            <div className="bg-[url('src/presentation/assets/image/abstract/blue-gradient-background.png')] bg-cover dark:bg-slate-950 h-screen w-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthPage;
