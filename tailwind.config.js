// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    // Esta parte é crucial. Ela diz ao Tailwind v4 para escanear
    // seus arquivos em busca de classes de utilitário.
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Não precisamos adicionar a animação aqui,
            // pois faremos isso diretamente no CSS.
        },
    },
    plugins: [],
}