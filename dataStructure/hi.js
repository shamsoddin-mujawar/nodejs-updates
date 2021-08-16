const dev = {
    defaultCommandTimeout: 60000,
    reporterConfigFile: 'cypress/config/dev-reporter-config.json',
    config: {
      baseUrl: 'https://google.com',
    },
    env: {
      publicPath: '/apps/user',
      apiV1: 'api',
      apiV2: 'api',
      apiV3: 'api',
    },
  };

// console.log(dev.config.baseUrl)

// config and env both are treated as a object it's like nexted object.

module.exports = {dev}