/*
 * @Author: your name
 * @Date: 2021-08-16 15:16:38
 * @LastEditTime: 2021-12-24 14:47:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\vue.config.js
 */
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.110.84:3000', //环境变量控制访问地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '', //路径重写 --如果本身的服务器接口地址就有 '/api' 这种通用前缀，也就是说https://www.exaple.com/api，就可以把 pathRewrite 删掉。
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};

/*
_React脚手架配置跨域代理的方法 src 目录下新建 setupProxy.js 文件
*/

// const proxy = require('http-proxy-middleware')
// module.exports = function(app) {
// app.use(
// proxy('/api1', { //api1 是需要转发的请求(所有带有/api1 前缀的请求都会转发给 5000)
// target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
// changeOrigin: true, //控制服务器接收到的请求头中 host 字段的值
// changeOrigin 设置为 true 时，服务器收到的请求头中的 host 为：localhost:5000
// changeOrigin 设置为 false 时，服务器收到的请求头中的 host 为：localhost:3000
// changeOrigin 默认值为 false，但我们一般将 changeOrigin 值设为 true
// pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
// secure:false https 请求中要设置为 ture
// }),
//
// )
// }

// antd4 动态创建icon
// import React from "react";
// import  * as Icon from '@ant-design/icons';

// var iconType = 'MessageOutlined';

// export default function App() {
//   return (
//     <div >
//     {
//       React.createElement(
//         Icon[iconType],
//         {
//           style:{ fontSize: '16px', color: '#08c' }
//         }
//       )
//     }
//     </div>
//   );
// }
