var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var lessConfig = require('../config').less;
var cache = require('gulp-cached');

gulp.task('less', function() {
  return gulp.src(lessConfig.src)
    .pipe(sourcemaps.init())
    .pipe(less({
            includePaths: ['styles']
        }))
     .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(lessConfig.dest))
    .pipe(browserSync.reload({stream:true}));
});
