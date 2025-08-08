/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        "accent-dark": "hsl(194, 100%, 24%)",
        "accent": "hsl(194, 100%, 42%)",
        "accent-light": "hsl(194, 100%, 75%)",
        "accent-lighter": "hsl(194, 38%, 91%)",
        "tu-delft": "#00A6D6",
        "igem": "#45b06cff",
      },
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.8)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        },
      })
    }
  ],
};
