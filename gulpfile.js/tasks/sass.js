var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var sassConfig = require('../config').sass;
var sasslint = require('gulp-scss-lint');
var gulpFilter = require('gulp-filter');
var base64 = require('gulp-base64');

gulp.task('sass', function() {
  var lintFilter = gulpFilter(
    ['**/*.scss', '!base/**/*', '!vendor/**/*'], {restore: true}
  );
  return gulp.src(sassConfig.src)
    .pipe(sourcemaps.init())
    .pipe(lintFilter)
    .pipe(sasslint({
      'config': 'scss-lint.yml'
    }))
    .pipe(lintFilter.restore)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(base64({
      extensions: ['svg'],
      baseDir: './src',
      debug: true
     }))
    .pipe(gulp.dest(sassConfig.dest))
    .pipe(browserSync.reload({stream:true}));
});
