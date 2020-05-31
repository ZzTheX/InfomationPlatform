const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' : './',
  configureWebpack: {
    resolve: {
      alias: {
        components: resolve('src/components')
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: '8888',
      proxy: {
          '/api': {
            target: 'http://platform.taogoucloud.com',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
      }
    }
}