'use strict'

var path = require('path')
var webpack = require('webpack')

// FIXME to prevent error, node-sass must be specifically 3.4.2
// see https://github.com/react-toolbox/react-toolbox-example/issues/19

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint'],
        include: [
          path.join(__dirname, 'api'),
          path.join(__dirname, 'config'),
          path.join(__dirname, 'src')
        ]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'config')
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: 'style!css?sourceMap&modules&importLoaders=2!sass?sourceMap'
      },
      {
        test: /\.jpg|png|svg$/, loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.ico$/, loader: 'file-loader?name=./[name].[ext]'
      }
    ]
  }
}