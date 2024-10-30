/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

