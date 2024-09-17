import React from 'react';

import TickyIcon from 'src/presentation/assets/image/icons/myticky/TickyIcon.webp';

/**
 *
 * @desc: Page de rediction pour les routes en cours de chargement
 */
const LoaderPage = () => {
    return (
        <div className="bg-[url('src/presentation/assets/image/abstract/point-background.webp')] dark:bg-[url('src/presentation/assets/image/abstract/point-background-dark.webp')] bg-custom-background dark:bg-slate-950 h-screen w-screen">
            <div className="bg-[url('src/presentation/assets/image/abstract/blue-gradient-background.png')] h-screen  flex items-center justify-center	flex-col">
                <div className="loader-card animate-bounce">
                    <div className="rounded-xl z-20 w-36 h-36 grid place-content-center font-syne text-sm text-center font-extrabold turnRotate">
                        <img src={TickyIcon} alt="Ticket" loading="lazy" />
                    </div>
                    {/* <div className="rounded-xl bg-blue-600 opacity-10 w-20 h-20 animate-ping delay"></div> */}
                </div>
                <span className="-mt-9 font-syne font-bold text-slate-500 text-sm">
                    Chargement...
                </span>
            </div>
        </div>
    );
};

export default LoaderPage;
