# My blog site

visit: <https://mendelbrot.github.io>

this blog is mainly for featuring projects and posts about software development.  It is built with [eleventy](https://www.11ty.dev/) and [tailwind](https://tailwindcss.com/).

## running the dev server

prerequisite: [node.js](https://nodejs.org/en) must be installed on your machine.

clone this repository, `cd` into the created the directory, then run these commands:

```
npm install
npm run serve
```

## deploying to github pages

i followed [this article](https://www.linkedin.com/pulse/eleventy-github-pages-lea-tortay/).

see the github action file at `.github/workflows/eleventy_build.yml`.

in the GitHub Pages settings it is set to deploy from the `gh-pages` branch at root.

## documentation

my dev notes are at <https://mendelbrot.github.io/docs>.