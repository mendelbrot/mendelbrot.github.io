# running the dev server

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