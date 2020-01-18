module.exports = {
  output: {
    path: __dirname + '/app/assets/sass',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};