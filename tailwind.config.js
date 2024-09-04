/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // Parcourt tous les fichiers dans /src avec les extensions js, ts, jsx, tsx
      './public/index.html', // Si vous utilisez un fichier HTML de base dans public
    ],
    theme: {
        extend: {
        colors: {
          // Ajoutez vos couleurs personnalisées ici
            primary: '#1DA1F2',
            secondary: '#14171A',
            accent: '#657786',
        },
        spacing: {
            // Ajoutez vos valeurs d'espacement personnalisées ici
            '72': '18rem',
            '84': '21rem',
            '96': '24rem',
        },
        fontFamily: {
            // Ajoutez vos polices personnalisées ici
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Plugin pour styler les formulaires
        require('@tailwindcss/typography'), // Plugin pour la typographie
        require('@tailwindcss/aspect-ratio'), // Plugin pour les ratios d'aspect
    ],
    darkMode: 'media', // Active le mode sombre selon la préférence du média utilisateur, peut être 'class' pour basculer via une classe CSS
};
