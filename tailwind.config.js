const colors = require("tailwindcss/colors");

module.exports = {
    prefix: '',
    // mode: 'jit',
    purge: {
        node: 'layers',
        content: ['./public/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                BIZ4D_BLUE: '#1361A0',
                BIZ4D_GREEN: '#92BD1E',
                BIZ4D_GRAY: '#404040',
                BIZ4D_PINK: '#C41F69',
                BIZ4D_PURPLE: '#7A0E6D',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
