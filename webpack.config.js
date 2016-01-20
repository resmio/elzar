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
        },
        {
          test: /\.css$/,
          loader: "style!css"
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
        }
      ]
    }
};
