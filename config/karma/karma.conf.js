var webpackConfig = require('../webpack/webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [{
      pattern: './config/karma/karma-test-shim.js',
      watched: false
    }],

    preprocessors: {
      './config/karma/karma-test-shim.js': ['webpack', 'sourcemap'],
      'assets/scss/**/*.scss|': ['scss'],
      'public/scss/**/*.scss|': ['scss'],
      'assets/less/**/*.less|': ['less'],
      'public/less/**/*.less|': ['less']
    },

    scssPreprocessor: {
      options: {
        sourceMap: true,
        includePaths: ['bower_components']
      }
    },

    lessPreprocessor: {
      options: {
        paths: ['assets/less', 'public/less'],
        save: true,
        rootpath: 'assets/images'
      }
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};