var path = require('path');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require(path.resolve('webpack.config.js'));
var bundler = webpack(webpackConfig);

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'build'
    },
    files: [
      'build/**/*.html',
      'build/**/*.js'
    ],
    browser: 'google-chrome',
    middleware: [
        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: webpackConfig.output.publicPath,

          // pretty colored output
          stats: { colors: true }

          // for other settings see
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),

        // bundler should be the same as above
        webpackHotMiddleware(bundler)
      ]
  });
});
