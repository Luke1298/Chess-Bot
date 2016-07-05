import webpackConfig from './webpack.core.babel.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

var chessStyles = require("./src/chess-ui/less/main.less");

export default Object.assign({}, webpackConfig, {
  entry: {
    chessUi : './src/chess-ui/main.js'
  },
  output: {
    path: "./dist/chess-ui/",
    filename: "[name].bundle.js"
  },
  plugins: [
    ...webpackConfig.plugins,
    new HtmlWebpackPlugin({
      title: 'Play Chess!',
      template: './src/chess-ui/index.ejs',
      cssFiles: [chessStyles],
      appMountIds: ['header', 'app', 'footer']
    })
  ]
});
