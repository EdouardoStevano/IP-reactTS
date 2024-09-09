// @type {import('tailwindcss').Config}
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import { nextui } from '@nextui-org/theme';

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './public/index.html',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    // presets: [
    //     (await import('./stylePreset.js')).default
    // ],
    theme: {
        extend: {
            colors: {
                'custom-background': '#DFEBEE',
                primary: '#265A99',
                secondary: '#484848',
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                Blue: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#172554',
                },
            },
            spacing: {
                // Ajoutez vos valeurs d'espacement personnalisées ici
                72: '18rem',
                84: '21rem',
                96: '24rem',
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                Poppins: ['Poppins', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [forms, typography, aspectRatio, nextui()],
    darkMode: 'media',
};
