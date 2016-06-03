const path = require('path')

const webpackConfig = {
  entry: './app/App.js',
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: /app/ }
    ]
  },
  devtool: 'source-map',
}

module.exports = webpackConfig
