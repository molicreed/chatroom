let path = require('path')

module.exports = {
  entry: './web/main.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "web")
        ],
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      }

    ]
  }
}