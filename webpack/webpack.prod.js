const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

const productionConfig = merge(common, {
  mode: 'production',
  // devtool: 'nosources-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.ejs',
      // favicon: path.resolve(__dirname, '../public/favicon.png'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: 'public' }],
    }),
  ],
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].bundle.[chunkhash].js',
    chunkFilename: '[name].bundle.[chunkhash].js',
    publicPath: '/',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 512000,
  },
});

module.exports = () =>
  merge(productionConfig, {
    plugins: [
      new Dotenv({
        path: './.env.production',
        defaults: false, // if true, will take .env.defaults if NODE_ENV not set
      }),
    ],
  });
