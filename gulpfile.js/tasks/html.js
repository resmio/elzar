var browserSync = require('browser-sync');
var config = require('../config').html;
var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
