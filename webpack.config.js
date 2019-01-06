module.exports = [
  {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules', './src'],
            }
          },
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_compontents)/,
        loader: 'babel-loader',
      },]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
];
