# styling

I'm doing the styling by hand as an opportunity to learn tailwind.  I searched for help on how to horizontally center.  this is done with flex and justify:

```html
<div class="flex justify-center">
  <div>
    Horizontally centered
  </div>
</div>
```

And likewise, getting the footer to stay at the bottom of the page even if there's not much content in the main section... that's also done with flex:

```html
<div class="overflow-y-scroll flex flex-col min-h-screen">
  <div class="flex-1">
    Main
  </div>
  <div>
    Footer
  </div>
</div>
```

Flex is the most flexible class, it's used for basically everything.  

When searching for help about custom widths i found out that you can enter them explicitly like this: `w-[740px]`.  And you can also put custom values in the `tailwind.config.js` to extend tailwind with your own styles.  

**update:** custom width wasn't needed afterall because `max-w-prose` gives an optimal reading width of 65 characters.

One thing i'm having difficulty with now is the social icons.  I found the icons that the jekyll theme minima uses and I copied the folder to my assets but i haven't quite got the icon to render yet.

**update:** the svg i was using wouldn't open in inkscape either.   now im using [simple icons](https://github.com/simple-icons/simple-icons)