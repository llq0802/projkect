
//console.log(Math.floor(Math.random() * 11));
/**
 * 随机获得两个数之间的整数
 * @param {*} max 
 * @param {*} min 
 * 
 */

// function getRandom(max, min) {
//   let num = Math.floor(Math.random() * (max - min + 1)) + min
//   return num
// }

Math.floor(Math.random()*11)




//getRandom(11,10)
// 模拟异步请求并捕获错误
async function fn(obj) {
  let time = obj.time || 1000
  try {
    let res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        obj.num1 >= obj.num2 ? resolve('success') : reject('fail')
      }, time);
    })
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  console.log('捕获到错误继续执行');
}
fn({ num1: new Date().getMonth(), num2: Math.floor(Math.random() * 2) })



// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('111');
//     true ? resolve('success') : reject('fail')
//   }, 1000);
// }).then(res => {
//   console.log(res);
//   return res + '123'
// }).then(res => {
//   console.log(res);
//   throw 'fail'
// }).catch(err => {
//   console.log(err);
// })

let arr1 = ['this', '1']
arr1 = [...arr1, 22]
// console.log(arr1);

let user = {
  name: 'llq',
  age: 18

}

console.log({ ...user, id: 0 });
user.height = 188

// Object.defineProperty(user,'done',{
//   set(val){
//     console.log(val);
//   },
//   get(){}


// })
console.log(user);

//闭包
function fn() {
  let num = 10
  return function () {
    console.log(num);
    return num
  }
}
// fn()()

// window.onresize = function () {
//   onResize()
// }

// function onResize() {
//   let pwidth = 1920;//定义屏幕的宽
//   let prem = 100;//定义屏幕的rem大小
//   // let html = document.getElementsByTagName("html")[0];
//   let html = document.documentElement //获得html
//   let oWidth = document.body.clientWidth || document.documentElement.clientWidth; //定义文档的宽

//   if (oWidth > 1300) {
//     oWidth = 1920
//     html.style.fontSize = oWidth / pwidth * prem + "px";
//   } else if (oWidth > 800) {
//     oWidth = oWidth + 400
//     html.style.fontSize = oWidth / pwidth * prem + "px";
//   } else if (oWidth < 800) {
//     //手机适配
//     let pwidth = 750;
//     let prem = 100;
//     let html = document.getElementsByTagName("html")[0];
//     let oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     html.style.fontSize = oWidth / pwidth * prem + "px";
//   }
 
//rem=font-size*
// JSON.parse()



//防抖debounce代码：
function debounce(fn, delay = 150) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function (...args) {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    if (timeout) clearTimeout(timeout);
    // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//节流方案一
function throttle(fn, delay = 150) {
  let canRun = true; // 通过闭包保存一个标记
  return function (...arg) {
    // 在函数开头判断标记是否为true，不为true则return  
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arg);
      canRun = true;
    }, delay);
  }
}


// 定时器节流方案二
function throttle(fn, wait = 150) {
  let timer = null;
  return function (...args) {
    //var context = this;
    //var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(this, args);
        timer = null;
      }, wait)
    }
  }
}



// 深拷贝拷贝对象封装函数 (递归)  还有通过JSON方式
function deepCopy(newobj, oldobj) {
  for (var k in oldobj) {
    // 判断我们的属性值属于那种数据类型
    // 1. 获取属性值  oldobj[k]
    var item = oldobj[k];
    // 2. 判断这个值是否是数组
    if (item instanceof Array) {
      newobj[k] = [];//把旧的属性值赋值给新的对象的属性名
      deepCopy(newobj[k], item)
    } else if (item instanceof Object) {
      // 3. 判断这个值是否是对象
      newobj[k] = {};
      deepCopy(newobj[k], item)
    } else {
      // 4. 属于简单数据类型
      newobj[k] = item;
    }
  }
}

//深拷贝
function name(newObj, oldObj) {

    for (let k in oldObj) {
      let item = oldObj[k]
      if (item instanceof Array) {
        newObj[k] = []; //把旧的属性值赋值给新的对象的属性名
        deepCopy(newObj[k], item)
      } else if (item instanceof Object) {
        newObj[k] = {}
        deepCopy(newObj[k], item)
      } else {
        newObj[k] = item
      }
    }
  
}










//时间格式化
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}



