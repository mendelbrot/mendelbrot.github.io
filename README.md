# running the dev server

```
npm run serve
```

# tailwind set up

following [this tutorial](https://5balloons.info/guide-tailwindcss-eleventy-static-site/).  now it's set up for basic html.  no templates or anything.  but tailwind is set up and from the tutorial it is very clear how tailwind is used: 

the command
```
npx tailwindcss -i ./src/css/tailwind.css -o ./_site/css/style.css
```
looks at the files specified in `tailwind.conf.js`, finds all the tailwind classes they plan to use, and builds `_site/css/styles.css` to make those classes.

watching or building has two steps:
1. with 11ty, build the html/js static site files in `_site`
2. with tailwind, build the css styles file

# site organization

I'm mostly following the tutorials and blog site code below for guidance.  

1. https://www.aleksandrhovhannisyan.com/blog/eleventy-the-good-the-bad-and-the-possum/
2. https://kittygiraudel.com/2020/11/30/from-jekyll-to-11ty/
3. https://github.com/KittyGiraudel/site

I'm especially copying a lot form link 3, the blog site by Kitty Giraudel.  I'm migrating from Jekyll to 11ty and so is Kitty.  I'm using 11ty version 2 and so is Kitty.  And Kitty knows about this stuff and is following best practices.  So this is great for me.

