/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajuste conforme sua estrutura
  ],
  theme: {
    extend: {
      colors: {
        azulGustavo: "#00A2FF", // nome e valor da sua cor personalizada
      },
    },
  },
  plugins: [],
};