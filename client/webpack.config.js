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
  devtool: 'eval-source-map' // ソースマップ有効
}
