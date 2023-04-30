# styling markdown

Oh I've got bigger problems then the social icons not rendering.  I just discovered that I might also have to style all of the markdown!  apparently the [markdown-it](https://www.npmjs.com/package/markdown-it) library doesn't do styling, just plain html.  I found [this article](https://dev.to/matthewtole/eleventy-markdown-and-tailwind-css-14f8) that talks about two styling solutions with tailwind.  

**update:** the techniques in the article above weren't needed. the [tailwind typography plugin](https://tailwindcss.com/docs/typography-plugin) beautifully styles anything in a "prose" class and also provides several ways to override the styles.  
