## running the dev server

```
npm run serve
```

this command, defined in the `package.json` file does these things:

1. deletes the the `_site` folder.  this is the output folder for the built site.  i've found it can get into an odd state, and i started manually deleting the folder often to be sure it didn't have stale files from the last build
2. starts the eleventy dev server as a background process
3. starts tailwind in watch mode

the `package.json` file is short, so here's the whole file:

```
{
  "name": "mendelbrot.github.io",
  "version": "2.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "rm -r _site && eleventy --serve & npx tailwindcss -i ./styles.css -o ./_site/css/styles.css --watch",
    "build": "eleventy & npx tailwindcss -i ./styles.css -o ./_site/css/styles.css"
  },
  "devDependencies": {
    "@11ty/eleventy": "^2.0.1",
    "@tailwindcss/typography": "^0.5.9",
    "tailwindcss": "^3.3.1"
  }
}
```

## tailwind set up

following [this tutorial](https://5balloons.info/guide-tailwindcss-eleventy-static-site/).  now it's set up for basic html.  no templates or anything.  but tailwind is set up and from the tutorial it is very clear how tailwind is used: 

the command
```
npx tailwindcss -i ./src/styles.css -o ./_site/css/styles.css
```
looks at the files specified in `tailwind.conf.js`, finds all the tailwind classes they plan to use, and builds `_site/css/styles.css` to make those classes.

watching or building has two steps:
1. with 11ty, build the html/js static site files in `_site`
2. with tailwind, build the css styles file

import the styles in the html head section and then tailwind classes can be used everywhere:

```
<link rel="stylesheet" type="text/css" href="/css/styles.css">
```

## site organization

I'm mostly following the tutorials and blog site code below for guidance.  

1. https://www.aleksandrhovhannisyan.com/blog/eleventy-the-good-the-bad-and-the-possum/
2. https://kittygiraudel.com/2020/11/30/from-jekyll-to-11ty/
3. https://github.com/KittyGiraudel/site

I'm especially copying a lot form link 3, the blog site by Kitty Giraudel.  I'm migrating from Jekyll to 11ty and so is Kitty.  I'm using 11ty version 2 and so is Kitty.  And Kitty knows about this stuff and is following best practices.  So this is great for me.

the organization is fairly consistent with jekyll.  the folders are:

```
_data
_includes
_layouts
_pages
_posts
assets
```

the `_data` folder is pretty neat.  there's a file in it called `site.js`:

```javascript
module.exports = {
  url: 'https://mendelbrot.github.io',
  description: 'My hobbies and projects site.',
  author: 'Gregory Maxedon',
  nav: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ],
}
```

all of the data exported from `site.js` can be used in any page, for example as: `{{site.author}}`.  I don't have any configuration in `.eleventy.js` or anything to make it do this.  It seems to just work this way.

`_includes` is for components of pages like `footer.liquid` etc...

`_layouts` is for page layouts.  Currently there's the base layout `base.liquid` which includes the head, header, footer, and renders its content to the main section.  Every other layout and page has the base as its layout.  There's also the `post.liquid` layout for markdown blog posts.  It renders the title and date for the markdown child's fromt matter and renders the markdown.  

(I was a bit surprised when i found out that data from child templates is available in parent templates, but it is useful here.  Eleventy has this [data cascade](https://www.11ty.dev/docs/data-cascade/).  cool name.  probably a bit over my head.  but i'm happy there was a way to access the data i needed 😃)

`_pages` is for the actual web pages `home.liquid` and `about.liquid`.  these are built into html files in the `_site` output folder.  the path to the files in the `_site` folder is determined by the [permalink](https://www.11ty.dev/docs/permalinks/) attribute in the markdown frontmatter.

Here's an example of the about page: 

```liquid
---
layout: base
permalink: about.html
---

{% markdown %}
I’m Greg.  Lorum ipsum.
{% endmarkdown %}
```

all of the liquid templates are able to use markdown sections like this.  This is something I learned from Kitty's blog. To allow this, put this in the `.eleventy.js`:

```javascript
const markdownIt = require('markdown-it')

module.exports = function(config) {
  
  \\ snip

  config.addPairedShortcode(
    'markdown',
    content => markdownIt().render(content)
  )

  \\ snip
};
```

ok, posts.  in the `_posts` folder there's a `_posts.json` file:

```json
{
  "layout": "post",
  "permalink": "/blog/{{ page.fileSlug }}/"
}
```

this applies frontmater data to each file.  note that the permalink for the url and file location is set from the post's filename.  here's an example post `test-post.md`:

```markdown
---
title: This is a test post!
date_posted: 2023-04-16
date_edited: 
---

lorum ipsum

```

to actually provide links to the posts there's a `post-list.liquid` template in the homepage.  to set this up, first create a collection in `.eleventy.js`:

```javascript
config.addCollection('posts', collection =>
  collection.getFilteredByGlob('_posts/*.md')
    .sort((a, b) => b.data.date_posted - a.data.date_posted)
)
```

then the collection can be accessed like so:

```liquid
<ul>
  {% for post in posts %}
  <a href="{{ post.url }}">
    {{ post.data.title }}
  </a>
  {% endfor %}
</ul>
```

finally, the `assets` folder has images and icons.  it is not processed at all by eleventy, eleventy simply copies everything to an assets folder in `_site`.  this is set by `config.addPassthroughCopy('assets')` in `.eleventy.js`

## styling

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

## styling markdown

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

## horizontal centering

this was um, perplexing.  centering something of fixed width is no problem, but centering different things with max-width was a problem.    I think the prose class does something strange, if it is centered with flex max-width, it doesn't reduce size on small screen.  for other items (that are themselves flex row), the only way i found to keep the width on a wide screen and not shrink all their extra inner space is to center with flex, flex-1.  eventually i used a combination of techniques to get everything centered and correct width on all screen sizes but im not satisfied with this.

```html
<body class="
  bg-blue-700 bg-opacity-70 
  overflow-y-auto
  min-h-screen flex flex-col 
  p-2 sm:p-4
  ">

  <header class="flex justify-center">
    <div class="max-w-prose flex-1">
      {% include "header.liquid" %}
    </div>
  </header>

  <main class="flex-1">
    <div class="max-w-prose mx-auto">
      {{ content }}
    </div>
  </main>

  <footer class="flex justify-center">
    <div class="max-w-prose flex-1">
      {% include "footer.liquid" %}
    </div>
  </footer>
  
</body>
```

## deployment to github pages

i followed [this article](https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/)