var dest= './build';
var src = './src';
var sassSrc = src + '/styles/**/*.{sass,scss}';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    },
    files: ['build/**/*.html'],
    browser: 'google-chrome'
  },

  js: {
    src: [src + '/javascripts/'],
    dest: dest,
    watch: [src + '/javascripts/**/*.js'],
  },

  html: {
    src: [src + '/views/index.html'],
    dest: dest,
    nunjucks: src + '/views/',
    watch: [src + '/views/**/*.html'],
  },

  svg: {
    src: [src + '/svg/**/*.svg'],
    dest: src + '/views/svg/' ,
    watch: [src + '/svg/**/*.svg'],
  },

  sass: {
    src: [sassSrc],
    dest: dest,
    settings: {},
  }
};
