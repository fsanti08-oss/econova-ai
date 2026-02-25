/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A0A14",      // Vuoto Profondo
                accent: "#7B61FF",       // Plasma
                ghost: "#F0EFF4",        // Sfondo chiaro
                darkText: "#18181B"      // Grafite
            },
            fontFamily: {
                heading: ['Sora', 'sans-serif'],
                drama: ['"Instrument Serif"', 'serif'],
                mono: ['"Fira Code"', 'monospace'],
                sans: ['Sora', 'sans-serif'] // Default sans
            }
        },
    },
    plugins: [],
}
