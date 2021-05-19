var config = require('./wdio.conf').config;

config.specs = [
  './src/features/example.feature',
];

(config.maxInstances = 1),

(config.cucumberOpts.require = [
  './src/steps/given.js',
  './src/steps/when.js',
  './src/steps/then.js',
]),
  (config.baseUrl = 'http://automationpractice.com/index.php');


exports.config = config;
