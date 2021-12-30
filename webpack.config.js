const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
// var host = require('./ip')();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: 'http://localhost:9000/',
    host: '0.0.0.0',
    compress: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        html5: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
      inject: true,
    }),
    new CssMinimizerWebpackPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader:'postcss-loader',
            options:{
              postcssOptions: {
                plugins: [
                  [require('postcss-preset-env')()]
                ]
              }
            }
          }
        ]
      }
    ]
  }
};