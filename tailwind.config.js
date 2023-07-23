/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#c0f205',
                black: '#1c1c1c',
                lightBlack: '#2A2A2A'
            }
        },
    },
    plugins: [],
}