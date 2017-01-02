var helpers = require('../helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js', 'html', 'json', 'css', 'less', 'scss']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      exclude: helpers.root('src', 'app'),
      loader: ExtractTextPlugin.extract('assets', 'css?sourceMap')
    }, {
      test: /\.css$/,
      exclude: helpers.root('src', 'app'),
      loader: ExtractTextPlugin.extract('public', 'css?sourceMap')
    }, {
      test: /\.css$/,
      include: helpers.root('src', 'app'),
      loader: 'raw'
    }, {
      test: /\.scss$/,
      exclude: helpers.root('src', 'app', 'assets/less', 'public/less'),
      loaders: ['raw-loader', 'sass-loader']  
    }, {
      test: /\.less$/,
      exclude: helpers.root('src', 'app', 'assets/scss', 'public/scss'),
      loaders: ['raw-loader', 'less-loader']  
    }]
  }
}