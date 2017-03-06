const config = require('./webpack.common')
const { DefinePlugin } = require('webpack')


config.plugins.push(new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
    PUSHER_APP_KEY: JSON.stringify('be829a1eea0e8deb4dab')
  }
}))

module.exports = config
