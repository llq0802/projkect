/*
 * @Author: your name
 * @Date: 2021-12-29 14:13:02
 * @LastEditTime: 2021-12-29 17:34:48
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\Watcher.js
 */
export default class Watcher {
  constructor(options) {}
  update() {
    console.log('update');
  }
}

export function parsePath(path) {
  const segments = path.split('.');
  return function(obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}
