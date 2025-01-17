/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "gray-20": "#F8F4EB",
                "gray-50": "#EFE6E6",
                // "gray-100": "#DFCCCC",
                "gray-500": "#5E0000",
                // "primary-100": "#FFE1E0",
                "primary-100": "#F3F5F7",
                // "primary-300": "#FFA6A3",
                "primary-300": "#F3F5F7",
                // "primary-500": "#FF6B66",
                "primary-500": "#FFC132",
                "secondary-400": "#FFCD5B",
                "secondary-500": "#FFC132",
            },
            backgroundImage: (theme) => ({
                "gradient-yellowred":
                    "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
                "mobile-home": "url('./assets/HomePageGraphic.png')",
            }),
        },
        fontFamily: {
            dmsans: ["DM Sans", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
        },
        content: {
            evolvetext: "url('./assets/EvolveText.png')",
            evolvetext: "url('./assets/AbstractWaves.png')",
            evolvetext: "url('./assets/Sparkles.png')",
            evolvetext: "url('./assets/Circles.png')",
        },
    },
    screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        // lg: "1024px",
        // xl: "1280px",
    },
    plugins: [],
};
