/*
 * @Author: your name
 * @Date: 2021-12-29 10:56:58
 * @LastEditTime: 2022-01-05 10:41:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\Observer.js
 */
import defineReactive from './defineReactive.js';
import observer from './observe.js';
import Dep from './Dep.js';
import { arrProto } from './arrary.js';
//设置对象的特殊值
export function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    enumerable: false,
    configurable: true,
    writable: true,
  });
}

// Observer 类的作用：将遍历对象每个属性都是响应式
export default class Observer {
  constructor(value) {
    this.dep = new Dep();

    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrProto);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  //遍历处理对象每个属性
  walk(value) {
    let keys = Object.keys(value);
    for (let key of keys) {
      defineReactive(value, key);
    }
  }
  // 处理数组项中是对象的响应式
  observeArray(array) {
    for (let i = 0, len = array.length; i < len; i++) {
      observer(array[i]);
    }
  }
}
