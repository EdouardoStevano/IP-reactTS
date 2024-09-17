import React from 'react';
import { Outlet } from 'react-router-dom';

// Importation de composant
import Sidebar from './layouts/sidebar/sidebar';

// Importation des constants
import { menus } from './constants/navigation';

import WelcomeMessage from '../../components/welcomeMessage';

/**
 *
 * @desc: Interface du Page de dashboard
 */
const DashboardPage = () => {
    return (
        <div className="bg-[url('src/presentation/assets/image/abstract/point-background.webp')] dark:bg-[url('src/presentation/assets/image/abstract/point-background-dark.webp')] bg-light-custom-background dark:bg-slate-950 h-screen w-screen">
            <div className="bg-[url('src/presentation/assets/image/abstract/blue-gradient-background.png')] bg-cover h-full sm:h-screen w-screen flex flex-col-reverse justify-end sm:flex-row">
                <WelcomeMessage username="Edouardo Stevano" />

                <Sidebar menuGroups={menus} />

                <div className="main-content h-full sm:w-full">
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
