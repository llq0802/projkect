/*
 * @Author: your name
 * @Date: 2021-12-29 11:02:59
 * @LastEditTime: 2021-12-30 09:24:28
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\defineReactive.js
 */
import observer from './observe.js';
import Dep from './Dep.js';

export default function defineReactive(targetObj, key, val = targetObj[key]) {
  let dep = new Dep();
  let childOb = observer(val);

  Object.defineProperty(targetObj, key, {
    configurable: true,
    enumerable: true,
    get() {
      if (Dep.target) {
        // 初始化访问数据时，收集依赖（watcher）
        dep.depend();

        //如果值还是对象
        if (childOb) {
          // 收集此数据的依赖（watcher）
          childOb.dep.depend();
          //如果是数组 遍历数组 收集每一项数据的依赖（watcher）
          if (Array.isArray(val)) {
            dependArray(val);
          }
        }
      }
      return val;
    },
    set(newValue) {
      if (newValue === val) return;
      childOb = observer(val);
      val = newValue;
      dep.notify();
    },
  });
}

function dependArray(value) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
