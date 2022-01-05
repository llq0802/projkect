/*
 * @Author: your name
 * @Date: 2021-12-01 16:06:45
 * @LastEditTime: 2021-12-24 20:34:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\node.js\index.js
 */

// module.exports = {};
// path.extname(); //返回文件后缀名
const path = require('path');
const querystring = require('querystring');
let str = 'api/bin/idne.html';
// const myURL = new URL('https://example.org?id=1&name=llq');
// console.log(myURL);
// console.log(path.basename(str));
// const aaa = 'id=1&name=llq';
// console.log(querystring.parse(aaa));
// console.log(myURL);
// __filename 表示当前正在执行的脚本的文件名
// __dirname 表示当前执行脚本所在的目录。

// path.join(__dirname, '/') 路径拼接
// path.basename 路径中的文件名 最后一个/之后
// path.extname 文件名中的扩展名
// path.normalize()整理不整齐的路径成标准路径
// console.log(path.normalize('/users/joe/..//test.txt'));//'/users/test.txt'

// pacejosn中 ^是锁定第一个 ~是锁定第二个

//path.join ，path.resolve都是连接文件目录地址
// console.log(path.join(__dirname, '../api'));
// console.log(path.resolve(__dirname, '../'));

// node.js中 默认this是{}  console.log(this);
// let b1 = Buffer.alloc(10);
// console.log(b1);
// // let buf = Buffer.from('1');接受 字符串 数组 buffer
// let buf1 = Buffer.from([1, 2, 3]);
// console.log(buf1);
process.env.NODE_ENV = 'dev';
console.log(process.env.NODE_ENV);
// console.log(__filename);
// console.log(__dirname);

// setImmediate(() => {
//   console.log('setImmediate');
// });
// setTimeout(() => {
//   console.log('setTimeout');
// });
// process.nextTick(() => {
//   console.log('nextTick');
// });
