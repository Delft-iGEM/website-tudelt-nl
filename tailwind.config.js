/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        "accent-dark": "#185A4F",
        "accent-light": "#05BE85",
        "accent-lighter": "#D7FDF4",
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
