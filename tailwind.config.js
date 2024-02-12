/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**.html',
    'ress/js/include.js',
    'views/**.html',
    'views/**/**.html',
    'views/**/**/**.html',
  ],
  safelist: [
    {
      pattern: /grid-cols-(2|3|4|5|6|7|8)/,
      variants : ['lg', 'xl', '2xl']
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

