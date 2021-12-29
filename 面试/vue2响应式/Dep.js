/*
 * @Author: your name
 * @Date: 2021-12-29 14:12:54
 * @LastEditTime: 2021-12-29 14:46:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\Dep.js
 */
//订阅发布模式
let uid = 0;
export default class Dep {
  static target = null; //watcher
  constructor() {
    this.id = uid++;
    this.subs = []; //收集的依赖就是Watcher实例， 里面存放的是对象属性的绑定一个Watcher实例
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
  // 添加watcher实例
  addSub(sub) {
    this.subs.push(sub);
  }
  //通知watcher实例更新
  notify() {
    const subs = [...this.subs];
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
