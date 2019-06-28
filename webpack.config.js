const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // webpack will take the files from ./src/index
  entry: ['babel-polyfill', './src/index'],

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

        // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      
      {
        test: /(\.css|\.scss)$/,
        include: [
            path.resolve(__dirname, "src")
        ],             
        use: [
             { loader: "style-loader" },
             { loader: "css-loader" },
             { loader: "sass-loader" }
        ]
    },  
    {
      test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      exclude: /node_modules/,
            use: [{
                loader: 'file-loader'
            }]
    }
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};