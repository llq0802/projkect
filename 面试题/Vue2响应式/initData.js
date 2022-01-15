/*
 * @Author: your name
 * @Date: 2022-01-05 10:53:38
 * @LastEditTime: 2022-01-08 09:49:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\initData.js
 */

import proxy from './proxy.js';

export default function initData(vm) {
  const _data = vm.$options.data;
  if (!_data) vm._data = {};
  if (typeof _data === 'function') {
    vm._data = _data.call(vm);
  } else {
    vm._data = _data;
  }

  for (let key in vm._data) {
    if (vm._data.hasOwnProperty(key)) {
      proxy(vm, '_data', key);
    }
  }
}
