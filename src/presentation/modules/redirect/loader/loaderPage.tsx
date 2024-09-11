import React from 'react';
import Lottie from 'lottie-react';
import LoaderAnimation from './loader-animation.json';

/**
 *
 * @desc: Page de rediction pour les routes en cours de chargement
 */
const LoaderPage = () => {
    return (
        <div className="bg-[url('src/presentation/assets/image/abstract/point-background.webp')] dark:bg-[url('src/presentation/assets/image/abstract/point-background-dark.webp')] bg-custom-background h-screen w-screen">
            <div className="bg-[url('src/presentation/assets/image/abstract/blue-gradient-background.png')] h-screen  flex items-center justify-center	flex-col">
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
