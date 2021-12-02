/*
 * @Author: your name
 * @Date: 2021-08-12 16:47:16
 * @LastEditTime: 2021-12-01 21:22:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\study-every-day\vue2.js
 */

let arrProto = Object.create(Array.prototype);
['push', 'shift', 'pop', 'unshift', 'splice'].forEach((method) => {
  arrProto[method] = function () {
    // 函数劫持,新函数内部继续调用老函数
    Array.prototype[method].call(this, ...arguments);
    updateView();
  };
});

// 收集data返回的对象1
function observer(targetObj) {
  if (Object.prototype.toString.call(targetObj).slice(8, -1) !== 'Object') {
    return targetObj;
  }
  if (targetObj instanceof Array) {
    Object.setPrototypeOf(targetObj, arrProto);
    // targetObj.__proto__ = arrProto;
  }
  // 遍历对象
  for (let key in targetObj) {
    defineReactive(targetObj, key, Reflect.get(targetObj, key));
  }
}
// 通过Object.defineProperty getter/setter设置获取
function defineReactive(targetObj, key, value) {
  observer(value);
  Object.defineProperty(targetObj, key, {
    get() {
      return targetObj[key];
    },
    set(newValue) {
      if (newValue !== value) {
        observer(newValue);
        updateView();
        targetObj[key] = newValue;
      }
    },
  });
}

function updateView() {
  console.log('更新视图');
}

let data = {
  name: 'llq',
  id: 15,
  desc: '甩哥',
  age: 20,
};

observer(data);

data.name = 'aaaa';
