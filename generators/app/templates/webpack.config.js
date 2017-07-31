const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BUILD_PATH = path.resolve(__dirname, 'build') // 项目构建目录
const BASE_PATH = path.join(__dirname, "src") //本地服务器所加载的页面所在的目录
let  ENV = process.env.NODE_ENV;
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
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jerryberton-React',
      inject: true,
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
     contentBase:  BASE_PATH,
     historyApiFallback: true,
     hot: true,
     open: false,
     inline: true, //实时刷新
     port: 8090
  },
}
