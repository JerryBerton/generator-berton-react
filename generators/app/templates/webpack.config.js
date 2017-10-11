const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_PATH = path.resolve(__dirname, 'build')
const BASE_PATH = path.join(__dirname, "src")
let  ENV = process.env.NODE_ENV;
let PORT = 8080

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    library: "jerryberton",
    libraryTarget: "umd",
    path: BUILD_PATH,
    filename: "bundle.js",
    auxiliaryComment: "jeryberton-test"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'eslint-loader'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.(css|scss|less)$/,
      use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192&name=[name]_[hash:6].[ext]'
    }, {
      loader: 'file-loader',
      options: {
        name: '[sha512:hash:base64:7].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jerryberton-React',
      inject: false,
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      cfgs: path.resolve(__dirname, 'src/cfgs/' + (process.env.NODE_ENV || "dev"))
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.web.js', '.js', '.json']
  },
  devServer: {
    contentBase:  BASE_PATH,
    historyApiFallback: true,
    hot: true,
    open: false,
    inline: true, //实时刷新
    port: PORT
  },
  devtool: 'source-map'
}
