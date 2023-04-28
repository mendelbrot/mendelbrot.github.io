# site organization

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