// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                logo: 'Akshar, sans-serif',
            },
            colors: {
                primary: colors.blue['600'],
                gray: {
                    primary: colors.gray['800'],
                    secondary: colors.gray['700'],
                },
                white: {
                    primary: colors.neutral['200'],
                    secondary: colors.neutral['300'],
                },
            },
        },
    },
    plugins: [],
};
