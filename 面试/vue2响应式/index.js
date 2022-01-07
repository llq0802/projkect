/*
 * @Author: your name
 * @Date: 2022-01-05 10:51:50
 * @LastEditTime: 2022-01-06 15:29:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\index.js
 */
import renderHelper from './compiler2x/renderHelper.js';
import initData from './compiler2x/initData.js';
import mount from './compiler2x/index.js';
import patch from './compiler2x/patch.js';

export default function Vue(options) {
  this._init(options);
}
Vue.prototype._init = function (options) {
  // this 是vue实例
  this.$options = options;
  initData(this);
  //在Vue实例上挂载运行render函数生成的VNode的工具函数
  renderHelper(this);
  //在Vue实例上挂载函数patch方法
  this._patch_ = patch;
  if (options.el) {
    this.$mount(el);
  }
};
Vue.prototype['&mount'] = function (el) {
  mount(el, this);
};
