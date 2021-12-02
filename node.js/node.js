/*
 * @Author: your name
 * @Date: 2021-12-01 16:06:45
 * @LastEditTime: 2021-12-02 09:06:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\node.js\index.js
 */

// module.exports = {};
// path.extname(); //返回后缀名
const path = require('path');
const querystring = require('querystring');
const myURL = new URL('https://example.org?id=1&name=llq');

const aaa = 'id=1&name=llq';
// console.log(querystring.parse(aaa));
// console.log(myURL);
// __filename 表示当前正在执行的脚本的文件名
// __dirname 表示当前执行脚本所在的目录。
console.log(__dirname);
