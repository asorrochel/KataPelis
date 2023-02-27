/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  _theme: {
    extend: {},
  },
  get theme() {
    return this._theme
  },
  set theme(value) {
    this._theme = value
  },
  plugins: [],
}
