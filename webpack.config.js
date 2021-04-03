const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'style.css')
        },
      {
        from: path.resolve(__dirname, 'assets'),
        to: 'assets'
      }
      ],
    }),
  ],
  watch: true,
};
