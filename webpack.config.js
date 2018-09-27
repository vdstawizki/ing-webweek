const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/templates/index.hbs',
  filename: './index.html',
});

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});

// const copyPlugin = new CopyWebpackPlugin(['assets/**']);

module.exports = {
  entry: {
    main: './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [htmlPlugin, miniCssPlugin],
};
