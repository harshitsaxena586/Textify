module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serrif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
