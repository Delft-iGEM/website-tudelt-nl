module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
