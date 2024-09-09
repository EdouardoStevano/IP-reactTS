import React from 'react';
import Lottie from 'lottie-react';
import LoaderAnimation from './loader-animation.json';

/**
 *
 * @desc: Page de rediction pour les routes en cours de chargement
 */
const LoaderPage = () => {
    return (
        <div className="tick-container bg-custom-background h-screen w-screen">
            <div className="tick-content h-screen  flex items-center justify-center	flex-col">
                <Lottie
                    animationData={LoaderAnimation}
                    loop={true}
                    style={{ width: '200px', height: '200px' }}
                />
            </div>
        </div>
    );
};

export default LoaderPage;
