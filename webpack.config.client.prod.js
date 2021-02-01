const path = require('path')
const curr_dir = process.cwd()

const config = {
  mode : "production",
  entry : [
    path.join(curr_dir, 'client/main.js')
  ],
  output: {
    path: path.join(curr_dir, '/dist/'),
    filename: 'bundle.js',
    publicPath:'/dist/'
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        use:['babel-loader']
      }
    ]
  }

}
module.exports = config
