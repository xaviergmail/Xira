console.log("env is", process.env.NODE_ENV)
module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]
      : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
