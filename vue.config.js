/*
 * @Author: your name
 * @Date: 2021-08-16 15:16:38
 * @LastEditTime: 2021-08-31 10:30:35
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
          '^/api':''   //路径重写 --如果本身的服务器接口地址就有 '/api' 这种通用前缀，也就是说https://www.exaple.com/api，就可以把 pathRewrite 删掉。
        },
      },
    },
  },
};
