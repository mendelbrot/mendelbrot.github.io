# Set up tailwind

following [this tutorial](https://5balloons.info/guide-tailwindcss-eleventy-static-site/).  now it's set up for basic html.  no templates or anything.  but tailwind is set up and from the tutorial it is very clear how tailwind is used: 

the command
```
npx tailwindcss -i ./src/css/tailwind.css -o ./_site/css/style.css
```
looks at the files specified in `tailwind.conf.js` (which are in the _site directory) finds all the tailwind classes they plan to use, and builds `_site/css/styles.css` to make those classes.

watching or building has two steps:
1. with 11ty, build the html/js static site files in `_site`
2. with tailwind, build the css styles file

