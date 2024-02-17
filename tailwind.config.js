/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "scale-up-center":
                    "scale-up-center 0.3s cubic-bezier(0.190, 1.000, 0.220, 1.000)   both",
            },
            keyframes: {
                "scale-up-center": {
                    "0%": {
                        transform: "scale(.5)",
                    },
                    to: {
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
