var path = require('path');
var webpack = require('webpack');

var gulp = require('gulp');
var gutil = require('gulp-util');;

var config = {
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    // Our app scripts go here
    './src/javascripts/app'
  ],
  output: {
    path: path.join(__dirname, '../../build/'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loaders: 'babel?cacheDirectory',
        // Exclude files outside source to speed things up
        include: [
          path.resolve(__dirname, 'src/javascripts/'),
        ],
        exclude: /(node_modules|bower_components)/,
        // Run .js and .jsx files through Babel
        test: /\.jsx?$/,
        // Options to configure Babel
        query: {
          'presets': ['es2015', 'react'],
          'plugins': ['transform-es2015-modules-commonjs']
        }
      }
    ]
  },
  debug: true
};

var webpackDevelopmentTask = function(callback) {
  webpack(
    config,
    function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      callback();
    });
}

gulp.task('webpack:development', webpackDevelopmentTask)
