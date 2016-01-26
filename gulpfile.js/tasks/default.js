var gulp = require('gulp');

gulp.task('default', ['html', 'sass:prod', 'svgsymbol', 'webpack:development']);
