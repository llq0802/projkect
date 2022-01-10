/*
 * @Author: your name
 * @Date: 2022-01-06 14:47:06
<<<<<<< HEAD
 * @LastEditTime: 2022-01-07 20:41:57
=======
 * @LastEditTime: 2022-01-10 16:05:03
>>>>>>> 916fcc713924ac9d736a9107696a620d42b50b6b
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\compiler2x\mountComponent.js
 */
import Watcher from '../observer/Watcher.js';
import Vue from '../index.js';

/**
 *
 *
 * @export
 * @param {*} vm Vue实例
 */
export default function mountComponent(vm) {
  // 更新组件的的函数,
  const updateComponent = () => {
    vm._update(vm._render());
  };

  // 实例化一个渲染 Watcher，当响应式数据更新时，这个更新函数会被执行
  new Watcher(vm, updateComponent);
}

Vue.prototype._render = function () {
  // 给 render 函数绑定 this 上下文为 Vue 实例
  //回去执行renderHelper中vm的_c函数与_v函数
  return this.$options.render.apply(this); //_c()
};
Vue.prototype._update = function (vnode) {
  //渲染前，获取旧的VNode,绑定到vm中
  const oldVnode = this._vnode;
  //设置新的VNode
  this._vnode = vnode;
  //老的VNode不存在说明是首次渲染根组件
  if (!oldVnode) {
    this.$el = this._patch_(this.$el, vnode);
  } else {
    // 后续更新组件或者首次渲染子组件，都会走这里
    this.$el = this._patch_(oldVnode, vnode);
  }
};
