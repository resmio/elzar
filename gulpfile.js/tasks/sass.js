var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var sassConfig = require('../config').sass;
var sasslint = require('gulp-scss-lint');
var cache = require('gulp-cached');
var filter = require('gulp-filter');

gulp.task('sass', function() {
  var lintFilter = filter([sassConfig.src ,'!' + sassConfig.src + '/vendor/**/*.scss']);
  return gulp.src(sassConfig.src)
    // .pipe(sourcemaps.init())
    // .pipe(cache(sasslint)) // We cache the linter so only run it on changes
    // .pipe(lintFilter)
    // .pipe(sasslint())
    // .pipe(lintFilter.restore)
    .pipe(sass())
     .on('error', handleErrors)
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassConfig.dest))
    .pipe(browserSync.reload({stream:true}));
});
