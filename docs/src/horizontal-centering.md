# horizontal-centering

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