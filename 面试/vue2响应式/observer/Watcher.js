/*
 * @Author: your name
 * @Date: 2021-12-29 14:13:02
 * @LastEditTime: 2022-01-07 21:12:39
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
    // 渲染watcher的value是undefined，因为渲染函数没有返回值
    // 因此value和this.value都是undefined，不会进入if
    const value = this.get(); //那么对于渲染 watcher 而言，它在执行 this.get() 方法求值的时候，会执行 getter 方法

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
    let value = this.getter.call(vm, vm);
    Dep.target = null;

    if (this.deep) {
      //递归遍历
      traverse(value);
    }
    // 清除依赖
    this.cleanupDeps();
    return value;
  }
  addDep(dep) {
    // dep添加到watcher
    this.deps.push(dep);
    // watcher添加到dep
    dep.addSub(this);
  }
  // 删除无用的依赖
  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      // 发现有些dep在上次求值时收集了自己，但是这次求值时没有收集自己，说明该数据已经不需要自己了，将自己从dep中删除即可
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
  }
}

export function parsePath(path) {
  const segments = path.split('.');
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}
