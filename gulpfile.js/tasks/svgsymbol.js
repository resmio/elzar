var browserSync = require('browser-sync');
var config = require('../config').svg;
var gulp = require('gulp');
// var changed = require('gulp-changed');
var handleErrors = require('../lib/handleErrors');
var svgmin = require('gulp-svgmin');
var svgsymbol = require('gulp-svg-symbols');

gulp.task('svgsymbol', function() {
  return gulp.src(config.src)
    // .pipe(changed(config.dest))
    .pipe(svgmin({
      plugins: [{
        removeAttrs: {attrs: '(stroke|fill|stroke-width)'},
        removeUselessStrokeAndFill: true
      }]
    }))
    .pipe(svgsymbol({
      templates: ['default-svg']
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
