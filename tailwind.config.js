/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{_includes,_layouts,_pages,_posts}/**/*.{html,js,liquid}'
  ],
  theme: {
    extend: {
      width: {
        'page': '740px', // custom page width. use: class="w-page"
      }
    },
  },
  plugins: [],
  
}

