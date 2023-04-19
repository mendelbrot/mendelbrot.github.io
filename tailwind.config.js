/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{_includes,_layouts,_pages,_posts}/**/*.{html,js,liquid}',
    './.eleventy.js'
  ],
  theme: {
    extend: {
      typography: (theme) => ({ // customization for the @tailwindcss/typography plugin
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            // 'maxWidth': 'none'
          }
        }
      }),
      width: {
        'page': '65ch', // custom page width. use: class="w-page"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  
}

