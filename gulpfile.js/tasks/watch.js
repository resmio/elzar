var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

// We need to create this new task for browsersync to be called after it finishes
// If we don't do it like that browsersync runs before the rpevious tasks in theClass
// array have finished

gulp.task('build:dev', ['html', 'sass:dev', 'svgsymbol', 'webpack:development']);

gulp.task('watch', ['build:dev', 'browserSync'], function(callback) {
  watch(config.sass.src, function() { gulp.start('sass:dev'); });
  watch(config.reactCss.watch, function() { gulp.start('webpack:development'); });
  watch(config.html.watch, function() { gulp.start('html'); });
  watch(config.js.watch, function() { gulp.start('webpack:development'); });
  watch(config.svg.src, function() { gulp.start('svgsymbol'); });
});
