const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    config.node = {fs: "empty"};
    return config
  },
  env: {
    EUFRACIO_SITE_TITLE: process.env.EUFRACIO_SITE_TITLE,
    EUFRACIO_URL: process.env.EUFRACIO_URL,
    EUFRACIO_SANITY_DATASET: process.env.EUFRACIO_SANITY_DATASET,
    EUFRACIO_SANITY_PROJECT_ID: process.env.EUFRACIO_SANITY_PROJECT_ID,
    EUFRACIO_SANITY_ENABLE_CDN: process.env.EUFRACIO_SANITY_ENABLE_CDN,
  }
}