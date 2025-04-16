/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",   // фон для страницы
        accent: "#E85D04",    // акцентный цвет для кнопок
      },
    },
  },
  plugins: [],
};
