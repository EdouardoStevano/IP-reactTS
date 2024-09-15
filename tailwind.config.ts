import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import { nextui } from '@nextui-org/theme';

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', './public/index.html',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    // presets: [
    //     (await import('./stylePreset.js')).default
    // ],
    theme: {
        extend: {
            colors: {
                light: {
                    'custom-background': '#f0f5f7',
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
                dark: {
                    'custom-background': '#1A202C',
                    primary: '#2C5282',
                    secondary: '#A0AEC0',
                    white: '#EDF2F7',
                    Blue: {
                        50: '#ebf8ff',
                        100: '#bee3f8',
                        200: '#90cdf4',
                        300: '#63b3ed',
                        400: '#4299e1',
                        500: '#3182ce',
                        600: '#2b6cb0',
                        700: '#2c5282',
                        800: '#2a4365',
                        900: '#1A365D',
                        950: '#122848',
                    },
                },
            },
            fontSize: {
                '12xl': '100px'
            },
        },
    },
    plugins: [
        forms,
        typography,
        aspectRatio,
        nextui()
    ],
    darkMode: 'class',
} satisfies Config;
