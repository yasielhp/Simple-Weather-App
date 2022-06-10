module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['PT Sans Caption', 'serif'],
        },
        extend: {
            boxShadow: {
                search: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}
