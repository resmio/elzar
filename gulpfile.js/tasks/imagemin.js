var browserSync = require('browser-sync');
var config = require('../config').svg;
var gulp = require('gulp');
var changed = require('gulp-changed');
var handleErrors = require('../lib/handleErrors');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: true,
          removeDimensions: true,
          addClassesToSVGElement: true
        }]
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
