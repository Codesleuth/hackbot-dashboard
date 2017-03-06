const config = require('./webpack.common')
const { DefinePlugin, optimize: { UglifyJsPlugin } } = require('webpack')

config.plugins.push(new UglifyJsPlugin({ sourceMap: true }))
config.plugins.push(new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}))

module.exports = config
