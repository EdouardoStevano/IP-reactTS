export const getInitialDarkModePreference = (): boolean => {
    const darkModePreference =
        localStorage.getItem('abm-mytick-theme') === 'dark' ||
        (!localStorage.getItem('abm-mytick-theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Applique la classe de mode sombre ou clair
    if (darkModePreference) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    return darkModePreference;
};
