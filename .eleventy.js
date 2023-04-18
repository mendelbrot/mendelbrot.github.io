const markdownIt = require('markdown-it')

module.exports = function(config) {
  
  config.addPassthroughCopy('assets')

  config.addPairedShortcode(
    'markdown',
    content => markdownIt().render(content)
  )

  config.addCollection('posts', collection =>
    collection.getFilteredByGlob('_posts/*.md')
      .sort((a, b) => b.date_posted - a.date_posted)
  )

  return {
    dir: { 
      input: './',
      output: './_site',
      layouts: '_layouts',
    }
  };
};