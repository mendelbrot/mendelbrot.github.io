---
title: This is a test post!
date_posted: 2023-04-10
date_edited: 
---

# test heading
lorum ipsum dgrstghrthtrhrth stdhhrt  hth rth
sthrthh

rthrth

```
test code block
aergj iperg
esarg
ergjp erg
r
g
esarg
```

```javascript
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
      width: {
        'page': '200px', // custom page width. use: class="w-page"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  
}
```

test bullets
- asef
- awrg
- agrgr

test checkbox

- [ ] done
- [ ] not done

test **bold** ***italics***

list
1. asdf
2. gesrgre
3. sdregherg


