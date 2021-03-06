const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
 
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', './assets/css') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  },
};

