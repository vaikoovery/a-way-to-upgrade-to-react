const path = require('path'),
  __dirname = './dist',
  __dirReactSource = './src/js/react',
  webpack = require('webpack'),
  extractTextPlugin = require('extract-text-webpack-plugin'),
  assetsPlugin = require('assets-webpack-plugin'),
  cleanWebpackPlugin = require('clean-webpack-plugin'),
  reactAssetJson = 'react_assets.json',
  assetsPluginInstance = new assetsPlugin({
    filename: path.join(__dirname, reactAssetJson)
  }),
  entryPoints = {
    'contact-us': path.resolve(__dirReactSource, 'contact-us.js')
  }
module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, 'ra', '[hash]'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'commons.[hash].js',
      name: 'commons',
      chunks: Object.keys(entryPoints)
    }),
    new extractTextPlugin({
      filename: '[name].[hash].css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        /* Production Env */
        NODE_ENV: JSON.stringify('production')
        /* Development Env */
        // 'NODE_ENV': JSON.stringify('development')
      }
    }),
    /* Production Env */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    assetsPluginInstance,
    new cleanWebpackPlugin(['ra'], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /.(gif|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
}
