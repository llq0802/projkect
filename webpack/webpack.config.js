const path = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 复用配置
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      // 自动加前缀,预设
      // plugins: [require('autoprefixer'), require('post-preset-env')]
      plugins: ['postcss-preset-env'],
    },
  },
};

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/' // 默认''
    //assetModuleFilename: 'img/[name].[hash:4][ext]' //全局配置资源文件
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', postcssLoader],
          },
          {
            test: /\.less$/,
            use: [
              // 'style-loader', // MiniCssExtractPlugin.loader代替 css样式不以style形式加入html文件
              MiniCssExtractPlugin.loader,
              // 'css-loader', // 当用@import导入其他样式时，并不会往前调用，所以需要使用importLoader
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  esModule: false,
                },
              },
              // {
              //   loader: 'postcss-loader',
              //   options: {
              //     postcssOptions: {
              //       // 自动加前缀,预设
              //       // plugins: [require('autoprefixer'), require('post-preset-env')]
              //       plugins: ['postcss-preset-env']

              //     }
              //   }
              // }
              // postcssLoader
              // 简写，单独文件配置 postcss-config.js
              'postcss-loader',
              'less-loader',
            ],
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader', // 处理html标签中的img
      },
      //#region // webpack5废弃功能
      // {
      //   test: /\.(png|gif|jpe?g|webp|svg)$/,
      //   type: 'javascript/auto', // w5已经废弃了file-loader和url-loader,要想使用只能加上这句话
      //   loader: 'file-loader', // file-loader会将资源文件拷贝一份到输出文件夹中
      //   options: {
      //     name: '[name].[hash:5].[ext]',
      //     path: path.resolve(__dirname, 'dist/imgs')
      //   }
      // },

      // {
      //   test: /\.png|gif|jpe?g|webp$/,
      //   type: 'javascript/auto',
      //   use: [
      //     {
      //       loader: 'url-loader', // url-loader会将资源文件地址解析为base64
      //       options: {
      //         limit: 60 * 1024, // 设置阈值，超过最大值将采用file-loader解析
      //         // filename: '[name].[hash:5].[ext]',
      //         // outputPath: path.resolve(__dirname, 'imgs')
      //       }
      //     }
      //   ]
      // },
      //#endregion

      // asset/resource -- file-loader
      // asset/inline   -- url-loader
      // asset/source   -- raw-loader
      // asset 动态判断
      {
        test: /\.(png|gif|jpe?g|webp|svg)$/i,
        // type: 'asset/resource',
        // generator: {
        //   filename: 'imgs/[name].[hash:4][ext]'
        // }
        type: 'asset',
        generator: {
          filename: 'imgs/[name].[hash:4][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      // {
      //   test: /favicon\.ico/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: '[name][ext]'
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // options: { // 单独配置一个babel.config.js文件管理
        //   presets: [
        //     [
        //       '@babel/preset-env',
        //       // { // 会覆盖browserslistrc文件的配置
        //       //   targets: {
        //       //     "chrome": "58",
        //       //     "ie": "8"
        //       //   },
        //       //   "corejs": "3",
        //       //   "useBuiltIns": "usage"
        //       // }
        //     ]
        //   ]
        // }
      },
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: '"./"', // VUE中的<% BASE_URL %> ejs常量
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'My App', //<title><%= htmlWebpackPlugin.options.title %></title>
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[hash:5].css',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server', //可以是server，static，json，disabled。在server模式下，分析器将启动HTTP服务器来显示软件包报告。在“静态”模式下，会生成带有报告的单个HTML文件。在disabled模式下，你可以使用这个插件来将generateStatsFile设置为true来生成Webpack Stats JSON文件。
    //   analyzerHost: '127.0.0.1', //将在“服务器”模式下使用的端口启动HTTP服务器。
    //   analyzerPort: 8888,
    //   reportFilename: 'report.html',
    //   defaultSizes: 'parsed', //默认显示在报告中的模块大小匹配方式。应该是stat，parsed或者gzip中的一个。
    //   openAnalyzer: true, //在默认浏览器中自动打开报告。
    //   generateStatsFile: false, //如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成。
    //   statsFilename: 'stats.json',
    //   statsOptions: null, //stats.toJson()方法的选项。例如，您可以使用source：false选项排除统计文件中模块的来源。
    //   logLevel: 'info', //日志级别，可以是info, warn, error, silent。
    //   excludeAssets:null //用于排除分析一些文件
    // })
  ],
  mode: 'development',
  devtool: 'eval-cheap-source-map', //'source-map',
  target: 'web',
  devServer: {
    compress: true,
    hot: true,
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        // secure: false, // 如果是https，配置这项
        target: 'http://47.108.78.202:8766',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.vue'],
  },
};
