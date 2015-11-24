var browserSync = require('browser-sync');
var config = require('../config').svg;
var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
  return gulp.src(config.src)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false,
          removeDimensions: true,
        }]
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
