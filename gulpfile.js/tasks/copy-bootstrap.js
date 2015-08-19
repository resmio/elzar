var changed = require('gulp-changed');
var gulp = require('gulp');
var bootstrap = require('../config').bootstrap;

gulp.task('copy-bootstrap', function() {
  return gulp.src(bootstrap.src)
    .pipe(changed(bootstrap.dest)) // Ignore unchanged files
    .pipe(gulp.dest(bootstrap.dest))
});
