var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var sassConfig = require('../config').sass;
var sassLintConfig = require('../config').sassLint;
var sasslint = require('gulp-scss-lint');
var cache = require('gulp-cached');

gulp.task('sass', function() {
  return gulp.src(sassConfig.src)
    .pipe(sourcemaps.init())
    .pipe(cache(sasslint)) // We cache the linter so only run it on changes
    .pipe(sasslint(sassLintConfig))
    .pipe(sass({
            includePaths: ['styles'],
            excludePaths: ['styles/bootstrap']
        }))
     .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassConfig.dest))
    .pipe(browserSync.reload({stream:true}));
});
