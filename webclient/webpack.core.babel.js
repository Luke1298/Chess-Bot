import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let eslintFailOnError = false;

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.NODE_ENV === 'production') {
  eslintFailOnError = true;
  plugins = [
    ...plugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}

let postLoaders = [];
if (process.env.TEST_MODE) {
  postLoaders.push({
    test: /\.(js|jsx?)$/,
    exclude: /(coverage|tests|__tests__|node_modules|bower_components)/,
    loader: 'istanbul-instrumenter'
  });
}

export default {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-3']
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ],
    postLoaders: postLoaders
  },
  postcss: [
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('autoprefixer')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname
  },
  plugins: [
    ...plugins,
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'something-common',
    //   chunks: ['some', 'chunks']
    // }),
    new ExtractTextPlugin('[name].bundle.css')
  ],
  eslint: {
    failOnError: eslintFailOnError,
    configFile: './.eslintrc'
  }
};
