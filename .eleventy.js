module.exports = function (eleventyConfig) {
  // OPT-OUT OF USING .gitignore to prevent reload issue when css change
  eleventyConfig.setUseGitIgnore(false)

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk')

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy('src/static')

  eleventyConfig.setLibrary('md')

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'liquid', 'html', '11ty.js', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
