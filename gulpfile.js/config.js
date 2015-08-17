var publicDirectory = "./build";
var publicAssets = publicDirectory + "/assets";
var sourceDirectory = "./app";
var sourceAssets = sourceDirectory + "/assets";
var lessSourceDirectory = sourceAssets + '/styles/**/*.less';

module.exports = {
  publicDirectory: publicDirectory,
  sourceAssets: sourceAssets,
  publicAssets: publicAssets,

  browserSync: {
    server: {
      baseDir: publicDirectory
    },
    files: ['build/**/*.html'],
    browser: "google chrome canary"
  },

  html: {
    watch: sourceDirectory + '/views/**/*.html',
    src: [sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
    dest: publicDirectory,
  },

  less: {
    watch: lessSourceDirectory,
    src: lessSourceDirectory,
    dest: publicAssets + "/styles",
    settings: {},
  }
};
