'use strict';

const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { name } = require('./package.json');

module.exports = {
  output: {
    path: path.join(__dirname, `../core/dist/${name}`),
    publicPath: `/${name}/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      library: { type: 'var', name },
      filename: 'entry.js',
      exposes: {
        Page: './src/index.js',
      },
      shared: ['react'],
    }),
  ],
};
