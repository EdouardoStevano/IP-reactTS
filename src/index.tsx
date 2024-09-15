import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './core/config/reportWebVitals';

// Importation des configuration
import RoutesConfig from './core/routes';

// Importation des contexts
import { SocketProvider } from 'src/presentation/context/socketContext';

// Importation des styles globales
import './style.main.scss';
import './presentation/styles/animation.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <SocketProvider>
            <RoutesConfig />
        </SocketProvider>
    </React.StrictMode>,
);

reportWebVitals();
