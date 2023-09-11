const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

const port = 6060;

const devConfig = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    // seperated path and filename of generated output
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port,
    https: false,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: 'public/index.ejs',
      inlineSource: '.js$',
    }),
  ],
  watchOptions: {
    followSymlinks: true,
  },
});

module.exports = () =>
  merge(devConfig, {
    plugins: [
      new Dotenv({
        path: './.env.defaults',
        defaults: false, // will take .env.defaults if NODE_ENV not set
      }),
    ],
  });
