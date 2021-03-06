var path = require('path');
var webpack = require('webpack');

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require(path.resolve('webpack.config.js'));

var webpackDevelopmentTask = function(callback) {
  webpack(
    config,
    function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      callback();
    });
}

gulp.task('webpack:development', webpackDevelopmentTask)
