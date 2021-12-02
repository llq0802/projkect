/*
 * @Author: your name
 * @Date: 2021-12-02 16:19:03
 * @LastEditTime: 2021-12-02 16:33:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\node.js\demo.js
 */

//简易爬虫
const fs = require('fs');
const http = require('http');
const path = require('path');
let url = 'http://www.baidu.com';
http
  .get(url, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      error = new Error(
        'Invalid content-type.\n' + `Expected application/json but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }
    let resData = '';
    res.on('data', (chunk) => {
      console.log('文件传输');
      resData += chunk;
    });
    res.on('end', (err) => {
      console.log('文件传输完毕');
      fs.writeFileSync(path.join(__dirname, '/baidu.html'), resData);
      //爬取图片
      let $ = cheerio.load(resData);
      $('img').each((i, el) => {
        console.log($(el).attr('src'));
      });
    });
  })
  .on('error', (err) => {
    console.log('请求错误');
  });
