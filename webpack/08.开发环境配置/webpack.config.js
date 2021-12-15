/*
  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出
*/

const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js', //入口文件
  output: {
    //出口文件
    filename: 'js/built.js', //出口文件名字
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            //css兼容处理
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // postcss的插件
                  'postcss-preset-env',
                ],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // postcss的插件
                  'postcss-preset-env',
                ],
              },
            },
          },
        ],
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[name].[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs',
        },
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true, //压缩
    port: 3000, //端口号
    open: true,
  },
};

// const {resolve } =require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports={
//   entry: './src/js/index.js',
//   output: {
//     filename: 'js/built.js',
//     path: resolve(__dirname, 'build')
//   },
// }
