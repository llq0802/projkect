/*
 * @Author: your name
 * @Date: 2021-12-29 10:56:18
 * @LastEditTime: 2021-12-29 11:40:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\index.js
 */
import Observer from './Observer.js';

export default function observer(value) {
  let ob; //为当前对象添加响应式
  if (Object.prototype.toString.call(value).slice(8, -1) !== 'Object') {
    return;
  }
  if (value.__ob__) {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}

let data = {
  name: 'llq',
  id: 15,
  desc: '甩哥',
  age: 20,
  arr: [1, 2, 3],
};

observer(data);

data.age;
