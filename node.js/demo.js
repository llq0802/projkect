/*
 * @Author: your name
 * @Date: 2021-12-02 16:19:03
 * @LastEditTime: 2021-12-03 17:48:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\node.js\demo.js
 */

//简易爬虫
const { Promise } = require('core-js');
const fs = require('fs');
const http = require('http');
const path = require('path');
// let url = 'http://www.baidu.com';
// http
//   .get(url, (res) => {
//     const { statusCode } = res;
//     const contentType = res.headers['content-type'];
//     let error;
//     if (statusCode !== 200) {
//       error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
//     } else if (!/^text\/html/.test(contentType)) {
//       error = new Error(
//         'Invalid content-type.\n' + `Expected application/json but received ${contentType}`
//       );
//     }
//     if (error) {
//       console.error(error.message);
//       res.resume();
//       return;
//     }
//     let resData = '';
//     res.on('data', (chunk) => {
//       console.log('文件传输');
//       resData += chunk;
//     });
//     res.on('end', (err) => {
//       console.log('文件传输完毕');
//       fs.writeFileSync(path.join(__dirname, '/baidu.html'), resData);
//       //爬取图片
//       let $ = cheerio.load(resData);
//       $('img').each((i, el) => {
//         console.log($(el).attr('src'));
//       });
//     });
//   })
//   .on('error', (err) => {
//     console.log('请求错误');
//   });

// console.log(path.resolve());
// console.log(path.resolve(__dirname, 'tmp/file'));
// console.log(path.join('foo/bar', '/tmp/file/'));

// console.log(path.resolve(__dirname, 'tmp/file'));

// console.log(path.resolve('wwwroot', 'static_files/png', 'gif/image.gif'));
// console.log(path.join('wwwroot', 'static_files/png/', 'gif/image.gif'));
// console.log(path.resolve('foo', 'bar', 'baz'));
// console.log(module.exports == exports);
// console.log(exports);
// console.log(module);

// console.log(process.nextTick);
// console.log(path.normalize('/users/joe/..//test.txt'));
//'/users/test.txt'
// console.log(path.resolve('data.txt'));
// fs.readFile(path.join(__dirname, 'data.txt'), 'utf-8', (err, data) => {
//   if (err) {
//     return;
//   }
//   console.log(data + '12313123');
// });
fs.mkdir(path.join(__dirname, 'wenjian'), { recursive: true }, (err) => {
  console.log('123231');
});
fs.mkdir(path.join(__dirname, 'wenjian'), { recursive: true }, (err) => {
  console.log('12');
});

// fs.open(path.join(__dirname, 'data.txt'), 'r', (err, data) => {
//   if (err) {
//     return;
//   }
//   console.log(data + '11');
// });

// setImmediate(() => {
//   console.log('setImmediate');
// });
// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// process.nextTick(() => {
//   console.log('nextTick');
// });
// setTimeout(() => {
//   console.log('setTimeout');
// }, 1000);
// console.log('zhu');
