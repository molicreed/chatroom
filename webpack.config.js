let path = require('path')

module.exports = {
  entry: './web/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
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
      },

      {
        test: /\.scss?$/,
        include: [
          path.resolve(__dirname, "web")
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}