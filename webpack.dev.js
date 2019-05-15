const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: (loader) => [
              require('postcss-import')({
                root: loader.resourcePath
              }),
              require('postcss-url')({
                from: '../../',
                to: './'
              }),
              require('postcss-preset-env')({
                stage: 1,
                browsers: [
                  '> 1%',
                  'last 2 versions'
                ]
              }),
              require('cssnano')({
                preset: 'default'
              })
            ]
          }
        }
      ]
    }]
  }
})
