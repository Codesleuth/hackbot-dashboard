const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: { limit: 25000 },
    }, {
      test: /\.(ico)$/,
      loader: 'file-loader',
      options: { name: '[name].[ext]' },
    }, {
      test: /\.(scss|sass)$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          // options: { importLoaders: 2, modules: true }
        },
        { loader: 'sass-loader' }
      ]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    hash: true
  })]
}
