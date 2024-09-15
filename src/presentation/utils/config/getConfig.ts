import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    name: string;
    role_name: string;
    exp: number;
}

interface Config {
    access?: string;
    refresh?: string;
    decodedToken?: DecodedToken;
}

function getConfig(): Config {
    const config: string | null = localStorage.getItem('token');

    if (config && config !== '') {
        const json: Config = JSON.parse(config);

        if (!json.access) {
            console.warn('Access non trouvé dans config');
            return json;
        }

        try {
            const decodedToken: DecodedToken = jwtDecode<DecodedToken>(
                json.access,
            );
            return {
                ...json,
                decodedToken,
            };
        } catch {
            // console.error('Échec du décodage', e);
            return json;
        }
    } else {
        console.warn('Config non trouvé dans localStorage');
        return {};
    }
}

export default getConfig;
