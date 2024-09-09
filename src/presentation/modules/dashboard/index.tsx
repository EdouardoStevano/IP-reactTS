import React, { useEffect, useState } from 'react';
import getConfig from 'src/presentation/utils/config/getConfig';
import { getCopyrightText } from 'src/presentation/utils/config/copyright';

/**
 *
 * @desc: Interface du Page de dashboard
 */
const DashboardPage = () => {
    const [role, setRole] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const conf = getConfig();

        if (conf.decodedToken) {
            setRole(conf.decodedToken.role_name);
        } else {
            setError('Aucun rôle trouvé ou échec du décodage du token.');
        }
    }, []);

    return (
        <div className="tick-container bg-custom-background h-screen w-screen">
            <div className="tick-content h-screen w-screen">
                <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p
                        className={'font-Poppins font-normal text-[13px]'}
                        dangerouslySetInnerHTML={{ __html: getCopyrightText() }}
                    />
                    {role ? (
                        <p>Votre rôle est : {role}</p>
                    ) : (
                        <p>Chargement du rôle...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
