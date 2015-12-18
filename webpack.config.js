const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src/index.js'),
  build: path.join(__dirname, 'build')
};

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      PATHS.app,
    ],
    output: {
      path: PATHS.build,
      filename: 'main.js'
    },
    devtool: 'source-map',
    debug: true,
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new HtmlwebpackPlugin({ title: 'Elzar'}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          include: path.join(__dirname, 'src'),
          loader: "react-hot"
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          cacheDirectory: true,
          loader: "babel",
          query: {
            'presets': ['es2015', 'react'],
          }
        }
      ]
    }
};
