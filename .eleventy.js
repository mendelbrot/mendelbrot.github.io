const markdownIt = require('markdown-it')

module.exports = function(config) {
  
  config.addPassthroughCopy('_assets/images')

  config.addPairedShortcode(
    'markdown',
    content => markdownIt().render(content)
  )

  config.addCollection('posts', collection => {
    a = collection.getFilteredByGlob('_posts/*.md')
      .sort((a, b) => b.date_posted - a.date_posted)

    console.log('posts data')
    console.log(a)
    
    return a
  }
    
  )

  return {
    dir: { 
      input: './',
      output: './_site',
      layouts: '_layouts',
    }
  };
};