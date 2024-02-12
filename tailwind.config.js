/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**.html',
    'ress/js/include.js',
    'views/**.html',
    'views/**/**.html',
    'views/**/**/**.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

