module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '*.js'
    ],
    preprocessors: {
      '*.js': 'coverage'
    },
    reporters: ['coverage'],
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true
  });
};
