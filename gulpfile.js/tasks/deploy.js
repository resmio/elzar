var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src(['./build/index.html', './build/main.css'])
    .pipe(ghPages());
});
