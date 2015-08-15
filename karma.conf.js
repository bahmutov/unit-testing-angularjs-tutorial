module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '*.js'
    ],
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true
  });
};
