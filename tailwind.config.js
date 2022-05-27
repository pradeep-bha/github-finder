module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
