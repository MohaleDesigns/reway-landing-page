/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#00A2FF",
        lightGrey: "#EAEAEA",
        garkGrey: "#828282",
      },
      backgroundImage: {
        advertBg: "url('../src/assets/images/advert.png')",
        ctaBg: "url('../src/assets/images/cta.png')",
      },
      fontFamily: {
        Suez: ["Suez One", "serif"],
        PTSans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
