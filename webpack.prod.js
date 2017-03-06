const config = require('./webpack.common')
const { DefinePlugin, optimize: { UglifyJsPlugin } } = require('webpack')

config.plugins.push(new UglifyJsPlugin({ sourceMap: true }))
config.plugins.push(new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    PUSHER_APP_KEY: JSON.stringify('ab3012cb643ea1541144')
  }
}))

module.exports = config
