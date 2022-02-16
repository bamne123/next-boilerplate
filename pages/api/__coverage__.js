/* eslint-disable import/no-extraneous-dependencies */

module.exports =
  process.env.NODE_ENV === 'test'
    ? require('@cypress/code-coverage/middleware/nextjs')
    : {};
