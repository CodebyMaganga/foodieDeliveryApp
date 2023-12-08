/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      citrine: "#DDD92A",
      raisinblack: "#2D2A32",
      maize: "#EAE151",
      vanilla: "#EEEFA8",
      babyPowder: "#FAFDF6",
      orangeweb: "#FFB238",
      sandybrown: "#F19143",
      orangecrayola: "#FF773D",
      tomato: "#F55536",
      xanthous: "#FABC3C",
      white: "#FFFF",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
