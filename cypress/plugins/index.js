/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
