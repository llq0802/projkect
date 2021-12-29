/*
 * @Author: your name
 * @Date: 2021-12-29 11:59:01
 * @LastEditTime: 2021-12-29 14:06:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\arrary.js
 */
import { def } from './Observer.js';
let methodsArray = ['push', 'shift', 'pop', 'unshift', 'splice', 'sort', 'reverse'];
export const arrProto = Object.create(Array.prototype);

methodsArray.forEach((method) => {
  const fn = arrProto[method];
  def(arrProto, method, function(...args) {
    let result = fn.call(this, ...args); //这里的this 指向的是调用方法的数组
    //this中肯定有__ob__ 因为数组不可能是第一次遍历，当递归遍历的时候为对象每个属性都添加__ob__ 值 及为Observe实例
    const ob = this.__ob__;
    let inserted; //当数组插入是用这几个方法 同时遍历响应新插入的数据的响应式
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    ob.dep.notify();
    return result;
  });
});
