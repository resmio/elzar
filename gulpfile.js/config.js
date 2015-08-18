var publicDirectory = './build';
var publicAssets = publicDirectory + '/assets';
var sourceDirectory = './app';
var sourceAssets = sourceDirectory;
var sassSourceDirectory = sourceAssets + '/styles/**/*.{sass,scss}';

module.exports = {
  publicDirectory: publicDirectory,
  sourceAssets: sourceAssets,
  publicAssets: publicAssets,

  browserSync: {
    server: {
      baseDir: publicDirectory
    },
    files: ['build/**/*.html'],
    browser: 'google chrome canary'
  },

  html: {
    watch: sourceDirectory + '/views/**/*.html',
    src: [sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
    dest: publicDirectory,
  },

  sass: {
    watch: sassSourceDirectory,
    src: sassSourceDirectory,
    dest: publicAssets + '/styles',
    settings: {},
  }
};
