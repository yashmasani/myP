const path = require('path')
const webpack = require('webpack')
const current_dir  = process.cwd()

const config = {
  name:"browser",
  mode:"development",
  devtool: "eval-source-map",
  entry:[
   'webpack-hot-middleware/client?reload=true',
   path.join(current_dir, 'client/main.js')
  ],
  output:{
    path : path.join(current_dir, '/dist'),
    filename: "bundle.js",
    publicPath : '/dist/'
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test:/\.css$/i,
        use:[
          "style.css",
          "css-loader"
        ]
      },
     { 
      test: /\.(ttf|eot|svg|gif|jpg|png|mp3)(\?[\s\S]+)?$/,
      use:[
       "file-loader"
      ]
    },
     {
      test: /\.mp3$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
     }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
 resolve:{
    alias:{
      'react-dom':'@hot-loader/react-dom'
    }
 }



}

module.exports = config
