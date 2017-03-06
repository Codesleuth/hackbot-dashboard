if (process.env.NODE_ENV === 'development') {
  module.exports = require('./webpack.dev')
} else {
  module.exports = require('./webpack.prod')
}
