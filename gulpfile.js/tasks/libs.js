var gulp = require('gulp');
var bootstrapJsSrc = './bootstrap-sass/assets/javascripts/bootstrap.js';
var jquerySrc = './node_modules/jquery/dist/jquery.js'

gulp.task('libs', function(){
  gulp.src([jquerySrc, bootstrapJsSrc])
      .pipe(gulp.dest('./build/vendor/'));
});
