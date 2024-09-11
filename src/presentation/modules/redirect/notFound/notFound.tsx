import React from 'react';
import Lottie from 'lottie-react';
import NotFoundAnimation from './notFound.json';
import { Link } from 'react-router-dom';

// Importation des composants
import { Button } from '@nextui-org/button';

const notFound = () => {
    return (
        <div className="bg-[url('src/presentation/assets/image/abstract/point-background.webp')] dark:bg-[url('src/presentation/assets/image/abstract/point-background-dark.webp')] bg-custom-background h-screen w-screen swipeFadeDown">
            <div className="bg-[url('src/presentation/assets/image/abstract/blue-gradient-background.png')] h-screen  flex items-center justify-center	flex-col">
                <Lottie
                    animationData={NotFoundAnimation}
                    loop={true}
                    style={{
                        width: '200px',
                        height: '200px',
                        marginBottom: '-50px',
                    }}
                />
                <h1 className="font-syne text-[80px] xl:-mt-5 xl:text-[130px] text-slate-800 font-bold mb-2 mt-2 md:text-[180px]">
                    Erreur 404
                </h1>
                <h3 className="text-slate-600 -mt-8 mb-6 font-bold xl:text-xl">
                    - Page introuvable -
                </h3>
                <p className="w-2/3 text-center xl:text-[14px] md:text-[12px] font-Poppins mb-8">
                    Désolé, la page que vous recherchez semble indisponible.
                    Peut-être avez-vous suivi un lien incorrect ou la page a été
                    déplacée. Retournez à la page d&apos;accueil pour continuer
                    votre navigation.
                </p>

                <Link to={'/'}>
                    <Button
                        color="primary"
                        className="font-Poppins text-sm outline outline-offset-2 outline-2 outline-slate-400 hover:scale-105"
                    >
                        Retour à l&lsquo;accueil
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default notFound;
