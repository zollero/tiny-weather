
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  webpack: (config) => {
    // 针对css和scss文件，支持px转rem
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

    // 设置静态资源路径前缀
    config.output.publicPath = '/tiny-weather'

    // 构建时生成PWA配置
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim:true,
      skipWaiting:true
    }))

    return config
  }
}