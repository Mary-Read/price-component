const path = require('path');
const dist = path.join(__dirname, "/client/dist")
const src = path.join(__dirname, "/client/src/")


module.exports = {
  mode : "development",
  entry : `${src}app.jsx`,
  output: {
    path: dist,
    filename: 'priceBundle.js'
  },
  module: {
    rules : [
      {
        test : /\.jsx?/,
        include : src,
        loader : 'babel-loader',
        options: {
          presets:
            ['@babel/preset-env', '@babel/preset-react']
          ,
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  },
  watch: true
}