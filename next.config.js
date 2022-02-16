/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const withBundleAnalyzer =
  process.env.NODE_ENV === 'test'
    ? require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      })
    : {};

const config = {
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

module.exports = process.env.NODE_ENV === 'test' ? withBundleAnalyzer(config) : config;
