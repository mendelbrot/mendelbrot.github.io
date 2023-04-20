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
            'maxWidth': 'none'
          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

