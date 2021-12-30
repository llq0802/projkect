import Dep from './Dep';

/*
 * @Author: your name
 * @Date: 2021-12-29 14:13:02
 * @LastEditTime: 2021-12-30 09:52:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\Watcher.js
 */
import Dep from './Dep.js';
export default class Watcher {
  constructor(vm, expOrFn, cb, options) {
    this.deps = [];
    this.vm = vm;
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
    }
    this.value = options.lazy ? undefined : this.get();
  }
  update() {
    if (this.lazy) {
      this.dirty = true;
    } else {
      // queueWatcher(this) 异步更新
    }
  }
  run() {
    // 先通过 this.get() 得到它当前的值
    const value = this.get();
    // 如果满足新旧值不等、新值是对象类型、deep 模式任何一个条件，则执行 watcher 的回调
    if (value !== this.value || this.deep || typeof value === 'object') {
      // set new value
      const oldValue = this.value;
      this.value = value;
      if (this.user) {
        this.cb.call(this.vm, value, oldValue);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
  get() {
    Dep.target = this;
    let value = this.getter.call();
    Dep.target = null;
    return value;
  }
  addDep(dep) {
    // dep添加到watcher
    this.deps.push(dep);
    // watcher添加到dep
    dep.addSub(this);
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
