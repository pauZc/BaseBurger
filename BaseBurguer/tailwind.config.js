module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        charcoal: "#121212",
        ember: "#ff9f0a",
        smoke: "#9b9b9b",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
}
