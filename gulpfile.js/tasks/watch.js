var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['html', 'sass:dev', 'svgsymbol', 'webpack:development', 'browserSync'], function(callback) {
  watch(config.sass.src, function() { gulp.start('sass:dev'); });
  watch(config.html.watch, function() { gulp.start('html'); });
  watch(config.js.watch, function() { gulp.start('webpack:development'); });
  watch(config.svg.src, function() { gulp.start('svgsymbol'); });
});
