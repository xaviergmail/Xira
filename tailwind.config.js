module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"]
      : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "even", "active"],
    },
  },
  plugins: [],
}
