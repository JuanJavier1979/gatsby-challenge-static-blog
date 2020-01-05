const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        body: "Open Sans",
      },
      fontSize: {
        '10xl': '10rem',
      }
    }
  },
  variants: {},
  plugins: []
}
