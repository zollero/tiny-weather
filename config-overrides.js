
module.exports = {
  webpack: (config) => {
    config.module.rules[1].oneOf.forEach(rule => {
      if (rule.test && ["/\\.css$/", '/\\.(scss|sass)$/'].includes(rule.test.toString())) {
        const postcssLoader = rule.use.find(v => v.loader && v.loader.indexOf('postcss-loader') > -1);
        postcssLoader.options.postcssOptions.plugins.push(
          [
            'postcss-plugin-px2rem',
            {
              rootValue: 37.5
            }
          ]
        )
      }
    })

    return config
  }
}