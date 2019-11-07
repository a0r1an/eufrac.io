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
    YOUTUBE_API_KEY:process.env.YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    PODCAST_CHANNEL: process.env.PODCAST_CHANNEL,
    URL: process.env.URL,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_ENABLE_CDN: process.env.SANITY_ENABLE_CDN,
  }
}