const markdownIt = require('markdown-it')
const { DateTime } = require("luxon")

// const mdStyles = {
//   h1: ['text-4xl', 'text-red-400', 'font-bold'],
//   a: ['text-blue-300', 'hover:underline'],
//   code: 'bg-blue-500',
//   p: ['bg-green-500']
// }

module.exports = function(config) {
  
  config.addPassthroughCopy('assets')

  const md = markdownIt({ linkify: true, html: true })
  config.setLibrary('md', md)

  config.addPairedShortcode(
    'markdown',
    content => `<div class="prose">${md.render(content)}</div>`
  )

  config.addCollection('posts', collection => 
    collection.getFilteredByGlob('_posts/*.md')
      .sort((a, b) => b.data.date_posted - a.data.date_posted)
  )

  config.addCollection('featured_posts', collection => 
    collection.getFilteredByGlob('_posts/*.md')
      .filter(p => p.data.tags?.includes('featured'))
      .sort((a, b) => b.data.date_posted - a.data.date_posted)
  )
    
  config.addFilter('date', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toUTC()
      .toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: { 
      input: './', 
      output: './_site', 
      layouts: '_layouts',
    }
  }
}