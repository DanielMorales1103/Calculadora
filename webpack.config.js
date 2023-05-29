const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index : './src/index.js'
    },
  output: {
    path: path.resolve(__dirname, 'dist_react'),
    filename: '[name].bundle.js',
  },
  plugins:[new MiniCssExtractPlugin({
    filename: "[name].css"
  }), 
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    chunks :['index']
  })  
    ],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imagenes/',
              publicPath: 'imagenes/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react']
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ],
  },
};