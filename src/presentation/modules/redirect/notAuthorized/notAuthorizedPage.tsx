import React from 'react';
import NotFound from '../../../assets/image/gif/NoInternet.png';
import { Link } from 'react-router-dom';

// Importation des composants
import { Button } from '@nextui-org/button';

/**
 *
 * @desc: Page de rediction pour les routes non autorisées
 */
const UnauthorizedPage = () => {
    return (
        <div className="tick-container bg-custom-background h-screen w-screen">
            <div className="tick-content h-screen  flex items-center flex-col justify-center">
                <div className="w-5/6 flex items-center">
                    <img src={NotFound} alt="Not found image" />

                    <div>
                        <h1 className="font-syne text-[70px] font-semibold">
                            403 - Non Autorisé
                        </h1>
                        <p className="mb-10 font-Poppins">
                            Vous n&lsquo;avez pas les permissions nécessaires
                            pour accéder à cette page.
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
            </div>
        </div>
    );
};

export default UnauthorizedPage;
