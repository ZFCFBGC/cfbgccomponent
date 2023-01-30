const path = require('path')
// const defaultSettings = require('../examples/settings')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = '组件库' // page title
const port = process.env.port || process.env.npm_config_port || 8080 // dev port

const allBuildConfig = {
  // 修改入口
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: () => {
    return {
      name: name,
      resolve: {
        extensions: ['js', '.vue', '.json'],
        alias: {
          '@examples': resolve('../examples'),
          '@packages': resolve('../packages')
        }
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.module
      .rule('scss')
      .oneOf('vue')
      .end()
  }
}

module.exports = allBuildConfig
