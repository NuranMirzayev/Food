'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,// regularniy vrajenie s pomoshyu etoqo mi naxodim js papku
        exclude: /(node_modules|bower_components)/, ///kakie papki budut iskluceni
        use: {   /// kak i cto mi budem ispolzovat
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {// eto podxodit pocti na vse browsers
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
