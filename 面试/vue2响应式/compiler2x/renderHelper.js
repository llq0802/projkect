/*
 * @Author: your name
 * @Date: 2022-01-06 14:53:16
 * @LastEditTime: 2022-01-06 17:11:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\compiler2x\renderHelper.js
 */

/**
 *
 *负责运行时生产VNode的工具方法
 * @export
 * @param {*} vm Vue实例
 */
export default function renderHelper(vm) {
  vm._c = createElement;
  vm._v = createTextNode;
}

/**
 *为指定标签创建对应的虚拟VNode
 *
 * @param {*} tag
 * @param {*} attrs
 * @param {*} children
 * @return {*}
 */
function createElement(tag, attrs, children) {
  //这里的this是指向Vue实例vm 因为是vm._c调用
  return Vnode(tag, attrs, children, this);
}
/**
 *
 *为文本创建对应的虚拟VNode
 * @param {*} textAst
 * @return {*}
 */
function createTextNode(textAst) {
  //这里的this是指向Vue实例vm 因为是vm._c调用
  return Vnode(null, null, null, this, textAst);
}
