const path = require('path'),
  __dirdist = './dist',
  __dirReactSource = './src/js/react',
  extractTextPlugin = require('extract-text-webpack-plugin'),
  assetsPlugin = require('assets-webpack-plugin'),
  cleanWebpackPlugin = require('clean-webpack-plugin'),
  reactAssetJson = 'react-assets.json',
  assetsPluginInstance = new assetsPlugin({
    fullPath: true,
    filename: path.join(reactAssetJson)
    // prettyPrint: true // Whether to format the JSON output for readability. 'false' by default
  }),
  entryPoints = {
    'contact-us': path.resolve(__dirReactSource, 'contact-us.js')
  }
module.exports = {
  entry: entryPoints,
  output: {
    // path: path.resolve(__dirdist, 'ra', '[hash]'),
    path: path.resolve(__dirdist, 'ra'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new extractTextPlugin({
      filename: '[name].[hash].css',
      disable: false,
      allChunks: true
    }),
    assetsPluginInstance,
    /* If its not handled by the automated scripts */
    new cleanWebpackPlugin(['ra'], {
      root: path.resolve(__dirdist),
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
          presets: ['@babel/preset-react']
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
