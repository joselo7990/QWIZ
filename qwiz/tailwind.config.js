/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Aquí defines tus colores personalizados
        "mi-color": "rgb(92,98,194)",
      },
    },
  },
  plugins: [],
};
