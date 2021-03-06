module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/ng-describe/dist/ng-describe.js',
      '*.js'
    ],
    preprocessors: {
      '*.js': 'coverage'
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true
  });
};
