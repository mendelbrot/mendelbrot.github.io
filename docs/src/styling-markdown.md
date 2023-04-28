# styling markdown

Oh I've got bigger problems then the social icons not rendering.  I just discovered that I might also have to style all of the markdown!  apparently the [markdown-it](https://www.npmjs.com/package/markdown-it) library doesn't do styling, just plain html.  I found [this article](https://dev.to/matthewtole/eleventy-markdown-and-tailwind-css-14f8) that talks about two styling solutions with tailwind.  

**update:** the techniques in the article above weren't needed. the [tailwind typography plugin](https://tailwindcss.com/docs/typography-plugin) beautifully styles anything in a "prose" class and also provides several ways to override the styles.  

## other blog sites to take inspiration from
i think [this](https://blog.kittycooper.com/) is a nice looking blog.

## more styling

I redid the styling.  encountered [margin collapse](https://www.joshwcomeau.com/css/rules-of-margin-collapse/).  decided, as ive done before, to use a fixed height div for vertical spacing.

```html
<div class="break"></div>
```

and i define custom classes after the tailwind style imports in my 'styles.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.section {
  @apply p-2 rounded-lg drop-shadow-md
}

.break {
  @apply  h-2 sm:h-4
}
```