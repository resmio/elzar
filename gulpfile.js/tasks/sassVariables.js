var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../lib/handleErrors');
var sassConfig = require('../config').sass;
var sasslint = require('gulp-scss-lint');

gulp.task('sass:variables', function() {
  return gulp.src(sassConfig.src)
    .pipe(lintFilter)
    .pipe(sasslint({
      'config': 'scss-lint.yml'
    }))
    .pipe(lintFilter.restore)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer({
      browsers: ['> 1%', 'ie 9']
    }))
    .on('error', handleErrors)
    .pipe(classPrefix('elzar-'))
    .pipe(base64({
      extensions: ['svg'],
      baseDir: './src'
     }))
    .pipe(gulp.dest(sassConfig.dest))
    .pipe(browserSync.reload({stream:true}));
})
