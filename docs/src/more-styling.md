# more styling

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