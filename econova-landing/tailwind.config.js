/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                surface: "#f8f9fa",
                glass: "rgba(255,255,255,0.72)",
                accent: "#0071e3",
                accentLight: "#e8f4fd",
                dark: "#1d1d1f",
                muted: "#86868b",
                subtle: "#f5f5f7",
                border: "rgba(0,0,0,0.06)",
            },
            fontFamily: {
                sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['Montserrat', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                'glass': '24px',
                'pill': '100px',
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0,0,0,0.06)',
                'glass-lg': '0 16px 48px rgba(0,0,0,0.08)',
                'glass-xl': '0 24px 64px rgba(0,0,0,0.10)',
                'soft': '0 2px 16px rgba(0,0,0,0.04)',
                'card': '0 4px 24px rgba(0,0,0,0.06)',
                'elevated': '0 12px 40px rgba(0,0,0,0.08)',
            },
            backdropBlur: {
                'glass': '20px',
            }
        },
    },
    plugins: [],
}
