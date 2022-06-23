// import { objs } from './signalR.js';

// let a = Array.of(1, 1, 2, 23, 3)将一组数转为数组
// console.log(a.length);
// let b = [1, 5, 10, 15].find(function (value, index, arr) {
//   return value > 9;
// })

// console.log(b);
// console.log([1, 2, 3].includes(2));
// console.log([1, 2, [3, [4, 5]]].flat(2));拉平数组

// console.log([12, 45, 7, 8, 4, 6, 7748, 448, 8, 41].sort(function (a, b) {
//   return a - b
// }));
// let date=+new Date()
// console.log(date);
//console.log(date.getTime());
// function getRandom(max, min) {
//   let num = Math.floor(Math.random() * (max - min) + 1) + min
//  console.log(num);
// }
// let strr= 'abc'
// console.log(strr.repeat(2));
// Math.max()

// /**
//  * @param {*} max
//  * @param {*} min
//  */
// function getRandom(max, min) {
//   num = Math.floor(Math.random() * (max - min + 1)) + min
//   //console.log(num);
//   return num;
// }
// getRandom(10, 8)
// console.log(Date.now());
// console.log(+new Date());
//for循环 for in循环 for of循环都可以用break(终止循环) continue(跳过此项循环)
//函数用return 返回一个值 多个值用对象表示
//提交表单时if语句中用return 或return false 便是阻止提价  return 后面的代码不会执行
// switch (index) {
//   case 1:
//     break
//   case 2:
//     break
//   default:

// Math.abs(-1)取绝对值
// Math.ceil()向上取整
// Mtah.floor()向下取整
// Math.floor(Math.random()*num)随机获取0到num-1的数
// Math.floor(Math.random()*max-min+1)+min 随机获取两个整数之间的数
// console.log(+new Date());时间鹾
// new Date().getTime()时间鹾
// arr.join()数组转为字符串
// str.split()字符串转为数组

// 第一个参数都是开始索引
// splice(); 第二参数不写则删除全部 写了则删除几个
// 第二个参数为0 后面写参数表示插入几个值
// 第二个参数有值，后面写参数表示替换几个值

// slice();substring() 长度为两个值之差
// substr() 长度为第二个参数额度值

// let obj={
//   id:1,
//   name:'kobu',
//   age:18,
//   text:'qiuwang'
// }
// delete obj.name
// delete obj['age']
// obj.color="red"
// Object.defineProperty(obj,'id',{
//   value:2,
//   getlet(){

//   },
//   ser(){

//   }
// })
// console.log(obj);

// Object.assign()浅复制对象

// Object.is()：判断两个值是否是相同的值。返回布尔值 做if判断

// if (Object.is('1', 1)) {
//   console.log('xiangdeng');
// } else {
//   console.log('budeng');
// }

// let num='123'
// Object.keys()
// Object.values()
// Object.defineProperty(obj,'name',{})
// obj.age=18
// delete obj.id
// console.log(parseInt(num).toFixed(2));

// parseFloat()
// parseInt()
// Number()
// String()
// toString()

// 8+'' 字符串

// toFixed() 只能对数字型的转换 如果是字符串则需要转成数字型 并且转换后是字符串类型

// console.log(str.repeat(5));重复字符串
//console.log(str.replace('a','e'));

// console.log(a.match(/a/g,)); 正则匹配到的 返回数组
// console.log(a.search(/a/g,)); 正则匹配到第一个满足条件的索引
// console.log(Math.round(1.9));
// let res = Object.is(1,1)? 'yes' : 3 < 2 ? 'yes' : 4 > 5 ? 'no' : 'err'

//console.log(res);
// console.log(!0);
// console.log(!10);

// Object.prototype.toString.call()判断值
// console.log('1'.toString());
// console.log('aa'.toLocaleUpperCase());

// '     A A '.toLocaleLowerCase().trim()

// 倒计时效果
// function name(params) {
//   let time = 6
//   let timer = setInterval(() => {
//     if (time == 0) {
//       clearInterval(timer);
//       params.disable = false;
//       params.title = '发送验证码'
//     } else {
//       disable = true;
//       title = `${time}秒后重试`;
//       time--
//     }
//   }, 1000);
// }

// function daojishi() {
//   var time = 60;
//   var interval = setInterval(function () {
//     document.getElementById("time").innerHTML = time;
//     time --1;
//     if (time == -1) {
//       clearInterval(interval)
//       document.getElementById("time").innerHTML = "倒计时结束"
//     }
//   }, 1000)
// }

// () => {
//   if (second <= 0) { return }
//   var timer = setInterval(function () {
//     second--
//     if (second <= 0) {
//       clearInterval(timer)
//     }
//   }, 1000)
// }

// var timer = setInterval(function() {
//   if (time == 0) {
//       // 清除定时器和复原按钮
//       clearInterval(timer);
//       btn.disabled = false;
//       btn.innerHTML = '发送';
//   } else {
//       btn.innerHTML = '还剩下' + time + '秒';
//       time--;
//   }
// }, 1000);

// let arr123546 = [{
//   id: 1
// }, {
//   id: 0
// }, {
//   id: 3
// }]
// let a = 'dascafagagdgasa'

// let arry = {
//   name: 'llq',
//   age: 18,
// }

// console.log(...a);
// console.log(...arr);

// arr.map(item => {
//   // item=item*2
//   item.id = item.id.toFixed(2)
//   return item
//   //return item.id
// })

//判断页面大小
function onResize() {
  let pwidth = 1920;
  let prem = 100;
  let html = document.getElementsByTagName('html')[0];
  let oWidth = html.width;

  document.body.clientWidth || document.documentElement.clientWidth;
  if (oWidth > 1300) {
    oWidth = 1920;
    html.style.fontSize = (oWidth / pwidth) * prem + 'px';
  } else if (oWidth > 800) {
    oWidth = oWidth + 400;
    html.style.fontSize = (oWidth / pwidth) * prem + 'px';
  } else if (oWidth < 800) {
    //手机适配
    let pwidth = 750;
    let prem = 100;
    let html = document.getElementsByTagName('html')[0];
    let oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = (oWidth / pwidth) * prem + 'px';
  }
}
// function fn() {
//   let num = 10;
//   function fun() {
//     return num
//   }
//   fun();
// }
// fn()

// function fn() {
//   let num = 10;
//   return function () {
//     console.log(num);
//     return num
//   }

// }
// fn()()

// function fn() {
//   let n = 3
//   return function () {
//     let m = 0
//     console.log(++n);
//     console.log(++m);
//   }
// }

// fn()()
// fn()()

// let a = fn()
// a()
// a()
// a()

// let b = fn()
// b()

// let a = fn()
// a()
// a()
// a()

// let user = {
//   id: 1,
//   name: 'lql',
//   age: 20,
//   title: '标题'
// }
//扩展运算符 (可以在数组 对象中添加值)
// let arr1 = [9, 8, 2, 5, 4]
// let aa = [...arr1, 12]
// let bb = {
//   ...user,
//   contact: 'yes'
// }
// console.log(aa);
// console.log(bb);

// let {//
//   id,
//   ...res
// } = user//对象结构
// let [first, ...info] = arr1

// console.log(Math.max(...arr1));
// Math.abs()
// Math.floor(Math.random() * (max - min + 1)) + min
// console.log(Math.max.apply(Math, arr1));
// call()立即调用 第一个参数改变this指向 第二个参数是参数(字符串)
// apply()立即调用 第一个参数改变this指向 第二个参数必须是数组[]
// bind()不会立即调用 只会改变this指向 返回一个新的函数

// 异步操作=>任务队列

//微任务
// new Promise((resolve, reject) => {
//   setTimeout(() => {///宏任务
//     resolve('成功')
//   }, 1000);
// }).then(res => {
//   //then后面返回一个Promise
//   //status状态
//   console.log(res);
//   return '22' //相当于 return Promise.resolve('22')

// }).then(res => {
//   console.log(res);
//   throw '33' //相当于 return Promise.reject('33')
// }).catch(err => {
//   console.log(err);
// })

// const s3 = new Set(["a","a","b","b"]);
// console.log(s3.size)
// let html = `
// 			<div>
// 				<span>${user.name}</span>
// 				<span>${user.age}</span>
// 			</div>
// 		`
// // console.log(html);

// let arrH = [2, 4, 6, 8, 10, 12];

// function isArr(arr, val) {
// if (arr.indexOf(val) >= 0) {
//   console.log('yes');
//   return true
// } else {
//   console.log('no');
//   return false
// }

//   return arr.includes(val) ? true : false
// }
// isArr(arrH, 10)

// console.log(str.charCodeAt(1));//code

//时间鹾
// console.log(Date.now());
// console.log(+new Date());
// console.log(new Date().getTime());

/**
 * @description:
 * @param {*}
 */
function unique(arr) {
  let newArr = [];
  let obj = {};
  arr.forEach((item) => {
    if (typeof item !== 'object') {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item);
      }
    } else {
      let str = JSON.stringify(item);
      if (!obj[str]) {
        newArr.push(item);
        obj[str] = 1;
      }
    }
  });
  return newArr;
}
// console.log(unique([123, 123, [1, 2, 3], [1, '2', 3], [1, 3, 4], [1, 2, 3], { a: 1 }, { a: 1 }, 'hello', null, null]))

// Infinity;
// flat(Infinity);
// Number.MAX_VALUE;
// Number.MIN_VALUE;
// class User {
//   static baseUrl = 'WWW'
//   constructor(...args) {
//     this._name= args[0]
//   }
//   api(url) {
//     return User.baseUrl + '/' + url;
//   }
//   set name(val) {
//     this._name = val
//   }
//   get data() {
//     return this.name
//   }
// }
// let u = new User
// let S = Object.create(User.prototype);

// 在类中的原型或者构造函数的原型与其他对象合并的时候 一定是Object.assign() 并且构造函数的原型放在参数的第一个！！！

// hasOwnProperty检测对象自身是否包含指定的属性，不检测原型链上继承的属性。
// 使用 in 可以在原型对象上检测
// Object.getOwnPropertyNames
// Object.freeze();
// Object.prototype.__proto__ == null; //true
// Object.prototype.getPrototypeOf(Object) == null; //true
// a.isPrototypeOf(b); //
// a instanceof b; // a对象的原型链上是否还有b构造函数的原型
// Object.create(); //创建一个新对象 并且吧里面的参数赋值给新对象的原型__proto__
// Object.assign();

// Object.setPrototypeOf(obj, hd);// /设置hd为obj的新原型
// Object.getPrototypeOf(obj)// 获取obj的新原型
// Object.defineProperty(obj, 'id', {
//   value: '',
//   configurable, //不能删除
//   enumerable, //不能枚举
//   writable, //不能重写
// }); //设置对象的单个属性
// Object.defineProperties(obj, {
//   name: {
//     value: '',
//   },
//   ag: {
//     value: '',
//   },
// });
// Object.getOwnPropertyDescriptor()查看对象属性的描述。

// try {
// } catch (error) {
//   throw new Error(error);
// }
// finally {
// }

// splice();
// slice(); //第二个参数为0时从最后一个字母开始（-1）

// substring(); //第二个参数为0时从0开始截取
// substr(); //第二个参数为截取的长度
// slice();

/**
 *
 *
 * @param {*} val
 * @param {number} [num=0]
 * @return {*}
 */
function toFixed(val, num = 0) {
  if (num == 0) {
    return val;
  } else {
    val = val.toString().split('.');
    if (val.length == 1) {
      let hou = '',
        res;
      for (let i = 0; i < num; i++) hou += '0';
      res = '.' + hou;
      return +(val[0] + res);
    } else {
      let hou = '.' + val[1].substr(0, num);
      return +(val[0] + hou);
    }
  }
}

/**
 *
 * @param {*} arr
 * @returns
 */
const functions = (arr) => {
  let obj = {};
  let newArr = [];
  arr.map((item) => {
    if (typeof item !== 'object') {
      newArr.search(item) == -1 && newArr.push(item);
      // newArr.indexOf(item) == -1 && newArr.push(item)
      // newArr.includes(item) == -1 && newArr.push(item)
    } else {
      let key = JSON.stringify(item);
      if (!obj[key]) {
        newArr.push(item);
        obj[key] = 1;
      }
    }
  });
  return newArr;
};

// 利用for循环，配合事件循环制作倒时效果\
function Countdown() {
  async function fn(i) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(i);
      }, 1000);
    });
  }
  (async function step() {
    for (let i = 6; i > -1; i--) await fn(i);
  })();
}

// '' NaN undefined null 0 都表示假

// (2==3) && console.log('yes')谁假返回谁 表达式一成立 则执行表达式二 反之一 (相当于if判断,通常用于函数调用)
// (2==3) || console.log('yes')谁真返回谁 表达式一成立 则执行表达式一  反之二(通常用于设置参数的默认值 )

// try {
// throw '错误'
// } catch (error) {
//     console.log(error);
// } finally {
// Sting Bigint Number null undefined Symbol  Boolean, Object(包含 Array Function Date RegExp)
console.log('subscribeAll');
