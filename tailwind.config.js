const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily: {
      sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
