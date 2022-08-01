const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true';

module.exports = {
    entry: {
      app: './src/index.tsx',
    },
    output: {
      // path: './build/ClientBin',
      filename: 'js/[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: './js/chunkFilename.[name].[contenthash].js',
    clean: true,
  },
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/, },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        // {
        //   test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        //   type: 'asset/resource',
        // },
        {
          test: /\.(png|ico|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[contenthash].[ext]',
            outputPath: 'images',
          },
        },
        // {
        //   test: /.*\.(gif|ico|png|jp(e*)g|svg)$/i,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: 21000,
        //         name: 'images/[name]_[hash:7].[ext]',
        //       },
        //     },
        //   ],
        // },
        // Vendor CSS loader
        // This is necessary to pack third party libraries like antd
        {
          test: /\.css$/i,
          // include: path.resolve(__dirname, '../node_modules'),
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: false,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css',
        ignoreOrder: false,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: enableBundleAnalyzer === true ? 'static' : 'disabled',
        openAnalyzer: true,
      }),
    ],
  };