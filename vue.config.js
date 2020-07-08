const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        components: resolve('src/components')
      }
    }
  },
  devServer: {
    host: 'localhost',
    open: true,
    port: '8888',
      proxy: {
          '/api': {
            target: 'http//192.168.0.101:9090',
            // target: 'http://platform.taogoucloud.com',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/api'
            }
          }
      }
    }
}