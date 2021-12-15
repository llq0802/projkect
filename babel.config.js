/*
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-12-15 16:04:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // '@babel/preset-env',
    {
      // 按需加载
      useBuiltIns: 'usage', //entry
      // 指定core-js版本
      corejs: 3,
    },
  ],
};
