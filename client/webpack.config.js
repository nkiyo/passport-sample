let path = require('path')

module.exports = {
  entry: {
    main: './src/main.js',
    // sub: './src/sub.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    //filename: 'build.js'
    //filename: '[name]-[chunkhash].js'
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      // https://github.com/webpack/webpack-dev-server/issues/458#issuecomment-243859936
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  devtool: 'eval-source-map' // ソースマップ有効
}
