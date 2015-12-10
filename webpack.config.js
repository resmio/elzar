var path = require('path');

module.exports = {
    entry: "./src/javascripts/app.js",
    output: {
      path: path.join(__dirname, '/build/'),
      filename: 'main.js'
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: "babel",
            query: {
              'presets': ['es2015', 'react']
            }
          }
        ]
    }
};
