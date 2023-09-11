const path = require('path');
const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// const styleLoader = {
//   loader: 'style-loader',
//   options: { insertAt: 'top' },
// };

// const postcssLoader = {
//   loader: 'postcss-loader',
//   options: {
//     plugins: () => [
//       autoprefixer({ browsers: ['IE >= 9', 'last 2 versions', '> 1%'] }),
//     ],
//   },
// };

// const cssLoader = (isLocal) => ({
//   loader: 'css-loader',
//   options: {
//     modules: true,
//     '-autoprefixer': true,
//     importLoaders: true,
//     localIdentName: isLocal ? '[local]' : null,
//   },
// });

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/client/index.js')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../node_modules', 'react'),
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
