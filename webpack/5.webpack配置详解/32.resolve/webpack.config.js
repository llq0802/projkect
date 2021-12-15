const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
  // 解析模块的规则
  resolve: {
    // 配置解析DSA  Q W2  ` 模块路径别名: 优点简写路径 缺点路径没有提示
    alias: {
      $css: resolve(__dirname, 'src/css')
      
    },
    // 配置省略文件路径的后缀名
    extensions: ['.js', '.json', '.jsx', '.css'],
    // 告诉 webpack 解析模块是去找哪个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  }
};


// devtool: 'source-map',
// resolve: {
//   // 重定义路径
//   alias: {
 //       src:'@'
//     components: '@/components',
//     common: 'components/common',
//     assets: '@/assets',
//     network: '@/network',
//     views: '@/views',
//   },
 // 配置省略文件路径的后缀名
//  extensions: ['.js', '.json', '.jsx','ts',tsx ],
// },