const path = require('path');
const glob = require('glob');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false,
            interpolate: true
          }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          },
        }]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          },
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      title: 'index.html',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.png',
      prefix: 'favicons/',
      icons: {
        twitter: true,
        windows: true
      }
    }),
    new ManifestPlugin()
  ],
  output: {
    filename: 'script.js',
    // publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist')
  }
};

let templateFiles = glob.sync('./src/templates/*.html')
templateFiles.forEach(function (element) {
  let templatePathAndFilename = element
  let templateFilename = element.substr(element.lastIndexOf('/') + 1)
  let htmlWebpackOutputTemplate = new HtmlWebpackPlugin({
    title: templateFilename,
    filename: templateFilename,
    template: templatePathAndFilename,
    inject: 'head'
  })
  module.exports.plugins.push(htmlWebpackOutputTemplate)
})

module.exports.plugins.push(new ScriptExtHtmlWebpackPlugin({
  defaultAttribute: 'defer'
}))
