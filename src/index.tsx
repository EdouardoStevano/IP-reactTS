import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './core/config/reportWebVitals';

// Importation des configuration
import RoutesConfig from './core/routes';

// Importation des styles globales
import './style.main.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <RoutesConfig />
    </React.StrictMode>,
);

reportWebVitals();
