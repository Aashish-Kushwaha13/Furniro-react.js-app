/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["VazirMatn", "sans-serif"],
      },
    },
  },plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    base: true, 
    styled: true,
    utils: true,
    logs: false,
  },
};