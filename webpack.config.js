var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './src/javascripts/app.js',
    ],
    output: {
      path: path.join(__dirname, '/build/'),
      filename: 'main.js'
    },
    devtool: 'source-map',
    debug: true,
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
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
