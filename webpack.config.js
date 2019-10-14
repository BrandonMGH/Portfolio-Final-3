const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ]
};


// rules: [
//   {
//     test: /\.(js|jsx)$/,
//     exclude: /node_modules/,
//     use: {
//       loader: "babel-loader"
//     }
//   },
//   {
//     test: /\.html$/,
//     use: [
//       {
//         loader: "html-loader"
//       }
//     ]
//   },
//   {
//     test: /\.(png|svg|jpg|gif)$/,
//     use: [
//       'file-loader',
//     ],
//   },
// ]
// },
// plugins: [
// new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// })
// ]