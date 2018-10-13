const path = require('path'),
  __dirDist = './dist',
  __dirReactSource = './src/js/react',
  miniCssExtractPlugin = require('mini-css-extract-plugin'),
  optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  assetsPlugin = require('assets-webpack-plugin'),
  cleanWebpackPlugin = require('clean-webpack-plugin'),
  dotEnv = require('dotenv').config(),
  __dirReactAssets = 'ra',
  reactAssetJson = 'react-assets.json',
  assetsPluginInstance = new assetsPlugin({
    fullPath: false,
    filename: path.join(reactAssetJson)
    // prettyPrint: true // Whether to format the JSON output for readability. 'false' by default
  }),
  devMode = process.env.NODE_ENV !== 'production',
  hashFileName = !devMode ? '.[hash].' : '.',
  entryPoints = {
    'contact-us': path.resolve(__dirReactSource, 'contact-us.js'),
    'about-us': path.resolve(__dirReactSource, 'about-us.js')
  }

module.exports = (env, argv) => ({
  entry: entryPoints,
  output: {
    path: path.resolve(__dirDist, __dirReactAssets),
    filename: '[name]' + hashFileName + 'bundle.js',
    chunkFilename: '[id]' + hashFileName + 'chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all'
        }
      }
    },
    minimizer: [new optimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name]' + hashFileName + 'css',
      chunkFilename: devMode ? '[id].css' : '[id]' + hashFileName + 'css'
      // allChunks: true
    }),
    assetsPluginInstance,
    /* If its not handled by the automated scripts */
    new cleanWebpackPlugin([__dirReactAssets], {
      root: path.resolve(__dirDist),
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
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.(jpeg|jpg|gif|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=10000' // use base64 if file is smaller than 10K byte
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
})
