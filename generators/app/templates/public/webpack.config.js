const {
  createConfig,
  defineConstants,
  env,
  addPlugins,
  entryPoint,
  setOutput,
  sourceMaps
 } = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const devServer = require('@webpack-blocks/dev-server2')
const postcss = require('@webpack-blocks/postcss')
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = './src/main.js'; // 入口文件
const output = './build/bundle.js' // 输出文件
const plugins = [
  new HtmlWebpackPlugin({
      title: 'Jerryberton-React',
      inject: true,
      template: './src/index.html'
  })
];
// webpack devServer config
const devServerConfig = {
  port: 3000,
  contentBase: 'src',
};
// webpack devServer proxy
const devServerProxy = {
  '/api': { target: 'http://localhost:3000' }
};

const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
})

module.exports = createConfig([
  entryPoint(entry),
  setOutput(output),
  babel({
    exclude: /\/node_modules\//
  }),
  postcss([
    autoprefixer({ browsers: ['last 2 versions'] })
  ]),
  addPlugins(plugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  resolveModules('src'),
  env('development', [
    devServer(devServerConfig),
    devServer.proxy(devServerProxy),
    sourceMaps()
  ])
])
