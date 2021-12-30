/*
 * @Author: your name
 * @Date: 2021-12-30 10:50:21
 * @LastEditTime: 2021-12-30 10:50:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue源码研究\VueApi.js
 */
export default function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  const ob = target.__ob__;

  if ((key in target && !(key in target.prototype)) || !ob) {
    target[key] = val;
    return val;
  }

  defineReactive(target, key, val);
  ob.dep.notify();
  return val;
}
