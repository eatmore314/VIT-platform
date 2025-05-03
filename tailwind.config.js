/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF9F",  // ✅ Your neon green defined here!
      },
    },
  },
  plugins: [],
};

