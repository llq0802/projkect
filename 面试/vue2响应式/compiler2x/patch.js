/*
 * @Author: your name
 * @Date: 2022-01-06 15:27:02
 * @LastEditTime: 2022-01-06 18:00:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\compiler2x\patch.js
 */

/**
 *负责初次渲染和后端更新
 *
 * @export
 * @param {*} oldvnode
 * @param {*} vnode
 */
export default function patch(oldvnode, vnode) {
  // 老节点存在，新节点不存在，则销毁组件
  if (oldvnode && !vnode) {
    return;
  }

  if (!oldvnode) {
    // 子组件首次渲染
  } else {
    if (oldvnode.nodeType) {
      //说明是真实节点，表示首次渲染根组件 app
      const parent = oldvnode.parentNode; //父节点
      const referNode = oldvnode.nextSibling; //参考节点是第一个script nextSibling 属性返回指定节点之后紧跟的节点，在相同的树层级中。
      //创建元素，将vnode变成真实节点，并添加到父节点中
      createEle(vnode, parent, referNode);
      //移除老的节点
      parent.removeChild(oldvnode);
    } else {
      //后续更新操作
    }
  }
}

/**
 *
 *
 * @param {*} vnode 虚拟dom
 * @param {*} parent 父节点
 * @param {*} referNode 挂载的参考节点
 */
function createEle(vnode, parent, referNode) {
  //记录Vnode的父节点 在子组件中会用到
  vnode.parent = parent;

  // 判断是不是自定义组件
  if (createComponent(vnode)) return;

  // 走到这里说明是原生标签,不是自定义组件
  const { tag, attr, children, text } = vnode;
  if (text) {
    //文本节点
    vnode.elm = createTextNode(vnode);
  } else {
    //根据vnode元素名创建真实节点
    vnode.elm = document.createElement(tag);
    //给元素设置属性
    setAttribute(attr, vnode);
    // 递归循环创建子节点
    for (let i = 0, len = children.length; i < len; i++) {
      createEle(children[i], vnode.elm);
    }
  }
  // 节点创建完毕,将其插入到父节点中
  if (parent) {
    const elm = vnode.elm;
    if (referNode) {
      // 插入到script标签之前
      parent.insertBefore(elm, referNode);
    } else {
      // 插入到父节点后面（一般情况都是body）
      parent.appendChild(elm);
    }
  }
}

/**
 *
 *创建自定义组件
 */
function createComponent() {}

/**
 *创建文本节点
 *
 */
function createTextNode(textVnode) {
  // text为文本节点ast对象
  let { text } = textVnode,
    textNode = null;
  //说明当前文本节点有表达式 即响应式数据
  if (text.expression) {
    // textVnode.context表示当前vue实例
    let value = textVnode.context[text.expression];
    textNode = document.createTextNode(typeof value === 'object' ? JSON.stringify(value) : value);
  } else {
    //纯文本节点
    textNode = document.createTextNode(text.text);
  }
  return textNode;
}

/**
 *给元素设置属性
 *
 */
function setAttribute(attr, vnode) {
  for (let name in attr) {
    if (attr.hasOwnProperty(name)) {
      if (name === 'vModel') {
        //处理v-model指令
        setVmodel(vnode.tag, attr.vModel.value, vnode, vnode.elm.type);
      } else if (name === 'vBind') {
        //处理v-bind指令
        setVbind(vnode);
      } else if (name === 'vOn') {
        //处理v-on指令
        setVon(vnode);
      } else {
        ////处理其他普通元素属性，直接设置
        // vnode.elm是创建的真实元素
        vnode.elm.setAttribute(name, attr[name]);
      }
    }
  }
}

/**
 *
 *
 * @param {*} tag tag 节点的标签名
 * @param {*} value 属性值
 * @param {*} vnode 节点
 */

function setVmodel(tag, value, vnode, type) {
  const { elm, context: vm } = vnode;
  //下拉框
  if (tag === 'select') {
    Promise.resolve().then(() => {
      // 利用 promise 延迟设置，直接设置不行，
      // 因为这会儿 option 元素还没创建
      elm.value = vm[value];
    });
    elm.addEventListener('change', function() {
      vm[value] = elm.value;
    });
  } else if (tag === 'input' && (type === 'text' || type === 'number')) {
    elm.value = vm[value];
    elm.addEventListener('input', function() {
      vm[value] = elm.value;
    });
    //input标签
  } else if (tag === 'input' && type === 'checkbox') {
    //input标签
    elm.checked = vm[value];
    elm.addEventListener('change', function() {
      vm[value] = elm.checked;
    });
  }
}

function setVbind(vnode) {
  const {
    attr: { vBind },
    elm,
    context: vm,
  } = vnode;

  for (let name in vBind) {
    if (!vBind.hasOwnProperty(name)) return;
    elm.setAttribute(name, vm[vBind[name]]);
    elm.removeAttribute(`v-bind:${name}`);
  }
}

function setVon(vnode) {
  const {
    attr: { vOn },
    elm,
    context: vm,
  } = vnode;
  for (let name in vOn) {
    if (!vBind.hasOwnProperty(name)) return;

    elm.addEventListener(name, function(...args) {
      vm.$options.methods[vOn[name]].apply(vm, args);
    });
  }
}

function setVshow(vnode) {}
