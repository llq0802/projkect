Function.prototype.myCall = function(context, ...args) {
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.myApply = function(context, arg) {
  context.fn = this;
  let result = arg ? context.fn(...arg) : context.fn();
  delete context.fn;
  return result;
};
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...params) {
    let result = fn().apply(context, [...args, ...params]);
    return result;
  };
};
function myNew(Fn, ...args) {
  let obj = Object.create(Fn.prototype);
  let result = Fn.apply(obj, args);
  return obj instanceof Fn ? result : obj;
}
function myInstanceof1(obj, Fn) {
  if (!obj.__proto__) return false;
  if (obj.__proto__ === Fn.prototype) return true;
  return myInstanceof1(obj.__proto__, Fn);
}
function myInstanceof2(obj, Fn) {
  let obj = obj.__proto__;
  while (obj) {
    if (obj === Fn.prototype) return true;
    obj = obj.__proto__;
  }
  return false;
}
function debounce(fn, wait = 0) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
function throttle(fn, wait = 0) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
function deepCopy(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (key of Object.keys(obj)) {
    result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
  }
  return result;
}
function deepCopyOne(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function unique(array = [1, 5, 2, 3, 2, 5, 4]) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
const filterNonUnique = (array) => {
  return array.filter((i) => array.indexOf(i) === array.lastIndexOf(i));
};
const uniqueElements = (array) => {
  return [...new Set(array)];
};

const uniqueDeepMap = (array) => {
  const res = [];
  const map = new Map();
  for (let i = 0, len = array.length; i < len; i++) {
    const item = array[i];
    if (!map.has(item)) {
      res.push(item);
      map.set(item, true);
    }
  }
  return res;
};

const llq = (str) => {
  let temp = {};
  let max = 0,
    val;
  for (let item of str) {
    if (!temp[str]) {
      temp[str] = 1;
    } else {
      temp[str]++;
    }
  }
  for (let k in temp) {
    if (temp[k] > max) {
      temp[k] = max;
      val = k;
    }
  }
  return {
    val,
    max,
  };
};
// 以下函数返回 min（包含）～ max（包含）之间的数字：
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 以下函数返回 min（包含）～ max（不包含）之间的数字：
function getRndIntegerNo(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function listToTree(list, parentId) {
  let res = [];
  list.forEach((item, index) => {
    if (item.parentId === parentId) res.push(item);
  });
  res.forEach((item, index) => {
    item.children = getTreeList(treeList, item.id);
    if (item.children.length === 0) delete item.children;
  });
  return res;
}
const listToTree2 = (items) => {
  const result = [];
  const itemMap = {};
  for (const item of items) {
    const id = item.id;
    const pid = item.parentId;
    if (!itemMap[id]) {
      itemMap[id] = { ...item };
    }
    const treeItem = itemMap[id];
    if (pid == null) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid].children) itemMap[pid].children = [];
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
};

function treeToList(list) {
  let res = [];
  for (const item of list) {
    if (item.children?.length) {
      res.push(...treeToList(item.children));
    } else {
      res.push(item);
    }
  }
  return res;
}

//USV：本地存储的key
/**
 * 设置本地存储
 * @param {*} key
 * @param {*} value
 */
export const setStorage = (key, value) => {
  let data = localStorage.getItem('usv');
  data = !data ? {} : JSON.parse(data);
  data[key] = value;
  localStorage.setItem('usv', JSON.stringify(data));
};
/**
 * 获取本地存储
 * @param {*} key
 * @returns
 */
export const getStorage = (key) => {
  let data = localStorage.getItem('usv');
  if (!data) return null;
  data = JSON.parse(data);
  return data[key] || null;
};
/**
 * 删除本地存储
 * @param {*} key
 * @returns
 */
export const delStorage = (key) => {
  if (!key) {
    localStorage.removeItem('usv');
    return;
  }
  let data = JSON.parse(localStorage.getItem('usv'));
  data[key] && delete data[key];
};
//数组中的累加合
const getTotal = [1, 2, 3, 4, 5].reduce((pre, cur) => pre + cur);

//取数组中的最大值
function arrayMax(array) {
  return array.reduce((pre, cur) => (pre > cur ? pre : cur), array[0]);
}

class Pro {
  status = 'pending';
  value = null;
  callbacks = [];
  constructor(executor) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status === 'pending') {
      this.status = 'resolve';
      this.value = value;
      this.callbacks.map((item) => {
        setTimeout(() => {
          item.onResove && item.onResove();
        });
      });
    }
  }
  reject(value) {
    if (this.status === 'pending') {
      this.status = 'reject';
      this.value = value;
      this.callbacks.map((item) => {
        setTimeout(() => {
          item.onReject && item.onReject();
        });
      });
    }
  }
  then(onResove, onReject) {
    const onResoveOrOnReject = (onResoveOrOnReject) => {
      let result = onResoveOrOnReject(this.value);
      if (result === proRes) {
        throw new Error('不能相等与上一个Pro的值');
      }
      try {
        if (result instanceof Pro) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    };
    const proRes = new Pro((resolve, reject) => {
      if (typeof resolve !== 'function') {
        resolve = (value) => value;
      }
      if (typeof reject !== 'function') {
        resolve = (value) => value;
      }
      if (this.status === 'resolve') {
        setTimeout(() => {
          onResoveOrOnReject(onResove);
        });
      }
      if (this.status === 'reject') {
        setTimeout(() => {
          onResoveOrOnReject(onReject);
        });
      }
      if (this.status === 'pending') {
        this.callbacks.push({
          onResove: () => {
            onResoveOrOnReject(onResove);
          },
          onReject: () => {
            onResoveOrOnReject(onReject);
          },
        });
      }
    });
    return proRes;
  }
  catch(onRreject) {
    return this.then(undefined, onRreject);
  }

  static resolve(value) {
    return new Pro((resolve, reject) => {
      try {
        if (value instanceof Pro) {
          value.then(resolve, reject);
        } else {
          resolve(value);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  static reject(value) {
    return new Pro((resolve, reject) => {
      reject(value);
    });
  }

  static race(value) {
    return new Pro((resolve, reject) => {
      value.forEach((item) => {
        item.then(resolve, reject);
      });
    });
  }

  static all(proArr) {
    let arr = [];
    return new Pro((resolve, reject) => {
      proArr.forEach((item, index) => {
        item.then(
          (v) => {
            arr[index] = v;
            if (arr.length === proArr.length) {
              resolve(arr);
            }
          },
          (r) => {
            reject(r);
          }
        );
      });
    });
  }
}
/**
 * 格式化时间
 * @param {*} date
 * @param {*} fmt
 * @returns
 */
export function dateFormat(date: any, fmt: any) {
  //author: yin
  const o: any = {
    'M+': new Date(date).getMonth() + 1, //月份
    'd+': new Date(date).getDate(), //日
    'h+': new Date(date).getHours(), //小时
    'm+': new Date(date).getMinutes(), //分
    's+': new Date(date).getSeconds(), //秒
    'q+': Math.floor((new Date(date).getMonth() + 3) / 3), //季度
    S: new Date(date).getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (new Date(date).getFullYear() + '').substr(4 - RegExp.$1.length));
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  return fmt;
}
//将数组拆分成平均长度的数组
function group(array, subNum) {
  let startIndex = 0;
  let newArray = [];
  while (startIndex < array.length) {
    newArray.push(array.slice(startIndex, (startIndex += subNum)));

    // 1.newArray.push(array.slice(startIndex, startIndex + subNum));
    // startIndex+=subNum

    // 2.newArray.push(array.slice(startIndex*subNum, (startIndex +1)*subNum));
    // (page-1*size),(page*size)
  }
  return newArray;
}
