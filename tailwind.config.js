module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Roboto-slab": ['Roboto Slab', 'serif'],
    },
    screens: {
      xxs: "300px",
      xs: "400px",
      // => @media (min-width: 420px) { ... }
      //from 420px upward

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
    shine: "shine 1s",
  },
  keyframes: {
    shine: {
      "100%": { left: "125%" },
    },
  },
    },
  },
  plugins: [],
};
