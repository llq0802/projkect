/*
 * @Author: your name
 * @Date: 2021-03-02 20:31:29
 * @LastEditTime: 2021-08-07 12:05:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\JS练习\dome.js
 */
// /**
//  * 日期对象
//  */

// const { log } = require("node:console");

// let date = new Date()
// let tiem1 = +new Date()
// let time = date.getTime() //时间戳
// let year = date.getFullYear() //年
// let month = date.getMonth() + 1 //月
// let day = date.getDate() //日
// //返回星期几
// let week = date.getDay() //0-6
// var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
// weekday[week]
// //console.log(weekday[week]);
// let hour = date.getHours() //24小时制
// let miunte = date.getMinutes()
// let second = date.getSeconds()
// console.log(date);
// let date_1 = new Date(2020 - 1 - 20)
// let res = date - date_1
// //时间对象相减得到之差为时间鹾 ms毫秒
// //console.log(res);
// /**
//  *
//  * @param {倒计时} endTime
//  */
// function countTime(endTime) {
//   let nowTime = new Date()
//   let ndTime = new Date(endTime)
//   let valueTime = nowTime - ndTime
//   if (valueTime >= 0) {
//    let d = Math.floor(valueTime / 1000 / 60 / 60 / 24);
//    let h = Math.floor(valueTime / 1000 / 60 / 60 % 24);
//    let m = Math.floor(valueTime / 1000 / 60 % 60);
//    let s = Math.floor(valueTime / 1000 % 60);

//    dd = d < 10 ? '0' + d : d
//    hh = h < 10 ? '0' + h : h
//    mm = m < 10 ? '0' + m : m
//    ss = s < 10 ? '0' + s : s
//   }
//   setTimeout(()=>{
//     countTime(endTime)
//   },1000)

// }
// countTime(2020-12-31)

// let str = 'avhbbbvbbvbcbbbbecllbowobcbbcbbrdcacac';
// function isstr(str) {
//   let obj = {}
//   for (let val of str) {
//     //let key = obj[val]
//     //console.log(key);
//     if (obj[val]) {
//       obj[val]++
//     } else {
//       obj[val] = 1
//     }
//     console.log(obj);
//   }
//   let max = 0
//   let tem =''

//   for (let i in obj) {
//     if (max < obj[i]) {
//       max = obj[i]
//       tem = i
//     }
//   }
//   console.log(max);
//   console.log(tem);
//    return {max,tem}
// }
// isstr(str)

// let str = 'ahellowocbbcbbrdcacac';
// function isstr(str) {
//   let obj = {}
//   for (let i = 0; i < str.length; i++) {
//     let key = str[i]
//     if (obj[key]) {
//       obj[key]++
//     } else {
//       obj[key] = 1
//     }
//   }
//   console.log(obj);
//   let max = 0
//   let tem
//   for (let i in obj) {
//     if (max < obj[i]) {
//       max = obj[i]
//       tem = i
//     }

//   }
//   console.log(max);
//   console.log(tem);
//   //return{max ,tem}

// }
//  isstr(str)

// var arr = "helloworld";
// var obj = {};
// for (var i = 0; i < arr.length; i++) {
//   var key = arr[i];
//   console.log(obj[key]);
//   if (obj[key]) {
//     obj[key]++;
//   } else {
//     obj[key] = 1;
//   }
// }
// console.log(obj);

// var fs='gsdg'
// for(let item of fs){
//   console.log(item);
// }

// console.log(typeof (''+12));
// console.log('2'+'2');
// console.log(2+'2');
// console.log(+'2'+2);
// console.log(typeof ('2'*1) );

// handleBtnClick

// let obj = {
//   id: 1,
//   name: '请求',
//   age: 18,
//   sing() {
//     return '唱歌'
//   }
// }

// const aa = { str: 20,...obj,num:'gdg'}
// console.log(aa);
// function name1(params) {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i*100);
//   }
// }

// name1()

// function a(params) {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);

//   setTimeout(() => {
//     console.log(3);
//   }, 0);

//   new Promise(function (resolve) {
//     resolve()
//   }).then(function () {
//     console.log(4);
//   })
//   console.log(5);
// }
// a()

// console.log(!1, !'a', !0);
// 1 === 1 && console.log(1);
// 2 === 3 || console.log(2);
// 1 !== 2 ? (console.log(12), console.log(2)) : console.log(33);
// console.log([1, 2, 3].toString());
// let a = [12, 4, 6]
// console.log(
//   a.join(), [...a]
// );

// let arr = [2, 45, 15, 1, 5]

// console.log(arr.keys().next());

// console.log(arr.forEach(item => {
//   item = item + 1
// }));
// console.log(arr);

// for (let item of arr) {
//   item * 2
//   console.log(item * 2);
// }
// console.log(arr);
// //求数组中出现最多的次数
// arr.reduce(function (pre, cur) {
//   pre += pre == cur ? 1 : 0
//   return pre
// }, 0)

// //求数组中的最大值
// arr.reduce((pre, cur) => {
//   return pre > cur ? pre : cur
// })
// console.log(Math.max(...arr));

// //闭包
// function fn(...arg) {
//   let num = 3
//   return function () {
//     let n = 0
//     console.log(++n);
//     console.log(++num);
//   }
// }
// fn()()
// let obj = {
//   name: 'klkq',
//   age: 20
// }

// let obj1 = obj
// let obj2 = { ...obj }
// let obj3 = JSON.parse(JSON.stringify(obj))
// let obj4 = Object.assign(obj)
// obj.age = 18

// console.log(obj, obj1, obj2, obj3, obj4);

// console.log(arr.lastIndexOf(1, -1));
// let a = arr.slice()
// const b = [...arr]
// const c = arr
// arr[0] = 'gs'
// console.log(arr, a, b, c);

// function name() {
//   let web = 1
//   console.log(web);
// }
// name()

//查找关键词
// let arr1 = ['山感受', '感受', '发顺丰']
// let str = '个人股发顺畅狗日封山年花果山感受'
// function findStr(arr = arr1, str = '个人股发顺畅狗日封山年花果山感受') {
//   let flag = arr.some(item => { return str.includes(item) })
//   flag && console.log('找到了');
//   // flag ? console.log('找到了') : console.log('没找到了');
// }
// // flag && console.log('找到了');
// findStr()

// let aaa = String(123456).slice(0, -2) + '*'.repeat(2)
// console.log(aaa);

// let arr = [1, 2, 3, 4, 5]
// let a = arr.reduce((prv, cur) => {
//   return prv += cur
// }, 0)
// console.log(a);
// let arr = ['1', '2', '3', '4']
// console.log(...arr);
// console.log(String(arr).split(','));
// console.log(arr.toString());
// // console.log(arr.map(Number));
// arr.map(String)

// let str = '481.1521gag'

// console.log(parseFloat(str).toFixed(2));

// let arr = ['29.123', '106.123']
// let a = [arr.map(Number)[1], arr.map(Number)[0]]
// let b = arr.map(Number).reverse()
// let c = `${arr.map(Number)[1]},
// ${arr.map(Number)[0]}`
// console.log(a, b, c);
// /^\s|\s$/

// console.log(undefined === null);

// if (!null) {
//   console.log(Number(null));
// }
// console.log(!!null);

// function User() {
//   console.log(this);
//   this.site = 'llq'
// }
// let a = new User()
// console.log(a);
// console.log(User);
// console.log(i);
// for (var i = 0; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   },1000)
// }

// function name1() {
//   let num = 1
//   return function () {
//     console.log(++num);
//   }

// }
// let a = name1()
// console.log(a);

// let arr = [2, 5, 48, 6, 48, 751, 84, 7, 1, 9]
// function aa(a = 1, b = 10) {
//   return (item, idnex) => {
//     return item > a && item < b
//   }
// }
// let res = arr.filter(
//   aa()
// )
// console.log(res);

// let obj = {
//   name: 'llq',
//   age: 18,

// }

// let hd = {}

// console.log(obj);

// for (let k in obj) {
//   hd[k] = obj[k];
//   console.log(hd[k],);
// }
// console.log(hd);
// let a = Object.assign({}, obj) //合并对象,浅拷贝(只能靠一层)
// let a = {...obj} // 对象.数组解构也是浅拷贝(只能靠一层)
// let a = JSON.parse(JSON.stringify(obj))//最简单的深拷贝 还可以用dolash库中的_cloneDeep()深拷贝
// a.args.length = 20;

// console.log(obj.hasOwnProperty('length'));// 检车对象本身上是否含有该属性
// console.log(obj.hasOwnProperty('name'));
// console.log("name" in obj);
// let b = {
//   length: 123
// }
// Object.setPrototypeOf(obj, b)// 为某个对象重新设置原型对象
// Object.setOwnPropertyDesc(obj,'name')//查看对象每个属性的特征
// Object.defineProperty()// 配置属性特征
// Object.seal()进行对象封闭 isSealed判断对象是否封闭
// Object.freeze()冻结对象

//深拷贝
JSON.parse(JSON.stringify(obj));
//深拷贝
function deepCopy1(newobj, oldobj) {
  for (let [k, v] of Object.entries(oldobj)) {
    switch (Object.prototype.toString.call().slice(1, -8)) {
      case "array":
        newobj[k] = [];
        deepCopy1(newobj[k], v);
        break;
      case "object":
        newobj[k] = {};
        deepCopy1(newobj[k], v);
        break;
      default:
        newobj[k] = v;
        break;
    }
  }
}
//深拷贝
function copy(obj) {
  let res = obj instanceof Array ? [] : {};
  for (let [v, k] of Object.entries(obj))
    res[v] = typeof k == "object" ? copy(k) : k;
  return res;
}

const copy = obj => {
  let val = obj instanceof Array ? [] : {};
  for (let k in obj) val[k] = typeof obj[k] == "object" ? copy(obj[k]) : obj[k];
  return val;
};
// 深拷贝拷贝对象封装函数 (递归)
function deepCopy(newobj, oldobj) {
  for (var k in oldobj) {
    // 判断我们的属性值属于那种数据类型
    // 1. 获取属性值  oldobj[k]
    var item = oldobj[k];
    // 2. 判断这个值是否是数组
    if (item instanceof Array) {
      newobj[k] = [];
      deepCopy(newobj[k], item);
    } else if (item instanceof Object) {
      // 3. 判断这个值是否是对象
      newobj[k] = {};
      deepCopy(newobj[k], item);
    } else {
      // 4. 属于简单数据类型
      newobj[k] = item;
    }
  }
}

let aga = {
  a: "1",
  b: [1, 5],
  c: {
    age: 20,
  },
};

let g = {};
deepCopy1(g, aga);
console.log(g);

// let sym = symbol()
// console.log(sym);
// Object.getPrototypeOf()//h获取对象的父亲（原型对象）
// let hd = {}
// console.log(hd);

// const lessons = [
//   {
//     title: "媒体查询响应式布局",
//     category: "css"
//   },
//   {
//     title: "FLEX 弹性盒模型",
//     category: "css"
//   },
//   {
//     title: "MYSQL多表查询随意操作",
//     category: "mysql"
//   }
// ];
// let lessonObj = lessons.reduce((obj, cur, index) => {
//   obj[`${cur["category"]}-${index}`] = cur;
//   return obj;
// }, {});
// console.log(lessonObj); //{css-0: {…}, css-1: {…}, mysql-2: {…}}
// console.log(lessonObj["css-0"]); //{title: "媒体查询响应式布局", category: "css"}

// 返回随机数
function random(max, min) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
