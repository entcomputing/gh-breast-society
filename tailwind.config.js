/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero": "url('/imgs/home-hero.png')",
      },
      colors: {
        "light-pink": "#F04B7E",
        "dark-pink": "#C04C81",
      },
    },
  },
  plugins: [],
};
