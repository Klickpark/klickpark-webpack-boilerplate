const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const TerserPlugin = require('terser-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin').default
// const imageminMozjpeg = require('imagemin-mozjpeg')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OfflinePlugin = require('offline-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
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
              // require('@fullhuman/postcss-purgecss')({
              //   content: ['./src/**/*.html'],
              //   keyframes: true
              // })
            ]
          }
        }
      ]
    }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    // new ImageminPlugin({
    //   test: /\.(jpe?g|png|gif|svg)$/i,
    //   gifsicle: { // lossless gif compressor
    //     optimizationLevel: 9
    //   },
    //   pngquant: ({ // lossy png compressor, remove for default lossless
    //     quality: '75'
    //   }),
    //   plugins: [imageminMozjpeg({ // lossy jpg compressor, remove for default lossless
    //     quality: '75'
    //   })]
    // }),
    // new OfflinePlugin()
  ]
})
