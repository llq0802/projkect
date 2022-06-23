const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()],
    },
  },
];

module.exports = {
  entry: './src/js/index.js', //入口
  output: {
    filename: 'js/built. js', //出口名字
    path: resolve(__dirname, 'build'), //出口路径
  },
  module: {
    rules: [
      {
        test: /\.css$/, //解析的文件名
        use: [...commonCssLoader], //解析的文件名使用的lodaer 如果是多个 则使用use[]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader'],
      },
      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
        先执行eslint 在执行babel
      */
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre', // 优先执行
        loader: 'eslint-loader',
        options: {
          //配置
          fix: true, //修复
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: { version: 3 },
                targets: {
                  chrome: '60',
                  firefox: '50',
                },
              },
            ],
          ],
        },
      },
      {
        //(处理不了html标签中的图片)
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          //配置
          limit: 8 * 1024, //大小
          name: '[hash:10].[ext]', //重新命名称
          outputPath: 'imgs', //解析图片后的路径
          esModule: false, //是否开启es6模块
        },
      },
      {
        //(处理html标签中的图片)
        test: /\.html$/,
        loader: 'html-loader',
      },

      {
        //处理其他资源
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    new OptimizeCssAssetsWebpackPlugin(), //压缩
    new HtmlWebpackPlugin({
      //解析html
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  mode: 'production',
};
