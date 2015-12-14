var path = require('path');

module.exports = {
    entry: "./src/javascripts/app.js",
    output: {
      path: path.join(__dirname, '/build/'),
      filename: 'main.js'
    },
    devtool: 'source-map',
    debug: true,
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          cacheDirectory: true,
          loader: "babel",
          query: {
            'presets': ['es2015', 'react']
          }
        }
      ]
    }
};
