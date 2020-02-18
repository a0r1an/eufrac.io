const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    config.node = {fs: "empty"};
    return config
  },
  env: {
    SITE_TITLE: process.env.SITE_TITLE,
    URL: process.env.URL,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_ENABLE_CDN: process.env.SANITY_ENABLE_CDN,
  }
}