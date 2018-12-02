const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'css-loader/locals',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};

module.exports = [browserConfig, serverConfig];

