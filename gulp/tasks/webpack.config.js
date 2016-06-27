var config        = require('./config');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  entry: {
    bundle: './gulp/assets/javascripts/bundle'
  },
  output: {
    filename:   '[name].min.js',
    assetsPath: config.javascript.dest
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},

      // for Bootstrap
      {test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml'},
      {test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff'},
      {test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff'},
    ]
  },
  plugins: [
    new ProvidePlugin({
      "Tether": 'tether',
      "window.Tether": "tether"
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};
