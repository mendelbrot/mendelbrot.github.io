const markdownIt = require('markdown-it')
const { DateTime } = require("luxon")
const yaml = require("js-yaml")

module.exports = function(config) {

  // support yaml in the _data folder
  config.addDataExtension("yml, yaml", contents => yaml.load(contents))
  
  config.addPassthroughCopy('assets')

  // copy the site documentation / notes pages
  config.addPassthroughCopy({ "docs/book": "docs" })

  const md = markdownIt({ linkify: true, html: true })
  config.setLibrary('md', md)

  config.addPairedShortcode(
    'markdown',
    content => `<div class="prose">${md.render(content)}</div>`
  )

  config.addCollection('posts', collection => 
    collection.getFilteredByGlob('_posts/*.md')
      .filter(p => p.data.stage === 'active')
      .sort((a, b) => b.data.date_posted - a.data.date_posted)
  )

  config.addCollection('featured_posts', collection => 
    collection.getFilteredByGlob('_posts/*.md')
      .filter(p => 
        p.data.stage === 'active' && 
        p.data.tags?.includes('featured')
      )
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