const path = require('path');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/index.js')],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      react: path.resolve(__dirname, '../node_modules', 'react'),
    },
    fallback: {
      path: require.resolve('path-browserify')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
