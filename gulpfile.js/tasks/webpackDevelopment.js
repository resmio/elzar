var path = require('path');
var webpack = require('webpack');

var gulp = require('gulp');
var gutil = require('gulp-util');;

var config = {
  entry: [
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
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
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
