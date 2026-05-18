/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serifTitle: ["'DM Serif Display'", 'serif'],
        googleSans: ["'Google Sans Flex'", 'sans-serif'],
        openSans: ["'Open Sans'", 'sans-serif'],
        raleway: ["'Raleway'", 'sans-serif'],
        roboto: ["'Roboto'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};