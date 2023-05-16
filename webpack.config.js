/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:"development",
  entry: {
    index: './src/index.js',
    editor: '/src/editor.js',
    sidebar: '/src/sidebar.js',
    expanded: '/src/expandedSidebar.js',
},

devtool: 'inline-source-map',
devServer: {
    static: './dist',
  },
plugins: [
    new HtmlWebpackPlugin({
        title: 'Document',
    }),
  ],
  output: {
    filename: '[name].  main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
      ],
      
  },
  
  
};