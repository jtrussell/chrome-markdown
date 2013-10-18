module.exports = function(config) {
  console.log(process.env.PORT);
  console.log(process.env.IP);
  config.set({
    autoWatch: true,
    singleRun: false,
    port: process.env.PORT || 9876,
    hostname: process.env.IP || 'localhost',
    frameworks: ['jasmine'],
    files: [
      'src/vendor/angular/angular.js',
      'src/vendor/angular-mocks/angular-mocks.js',
      'src/vendor/marked/lib/marked.js',

      'src/scripts/*.js',
      'src/scripts/**/*.js',

      'test/unit/**/*.js'
    ],
    browsers: [process.env.TRAVIS ? 'Firefox' : 'PhantomJS'],
    reporters: [process.env.TRAVIS ? 'dots' : 'progress'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher'
    ],
    logLevel: config.LOG_INFO
  });
};