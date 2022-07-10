/**
 *TS内置工具类型
 */
//  Partial<>  将一个类型的所有属性变为可选的.
//  Required<> 将给定类型的所有属性变为必填的
//  Readonly<> 将给定类型的所有属性设为只读，这意味着给定类型的属性不可以被重新赋值。
//  Pick<> 从给定的类型中选取出指定的键值，然后组成一个新的类型。
//  Omit<> 是返回去除指定的键值之后返回的新类型
//  Record<string,any> Record 的作用是生成接口类型，然后我们使用传入的泛型参数分别作为接口类型的属性和值。
//  null! 非空判断

// 只要 .ts 或 .d.ts 文件中有 import 或 export，那么这个文件中的 declare 就会变成局部变量
type VDS = string | number;
interface Name {
  name: string;
}
interface Age {
  age: number;
}
type User = Name & Age;

// let arr: Array<number> = [1];
// let arr1: string[] = ["a"];
// let arr3: [string, number, boolean] = ["a", 1, false];
// let arra: any = ["a", 1, false];
// //枚举
// enum Flag {
//   red,
//   bule,
// }
// enum fangxiang {
//   up = 1,
//   right = 2,
//   down = 3,
//   left = 4,
// }
// let a: fangxiang = fangxiang.up;
// let c: flag = flag.red;

// function fn(): void {
//   console.log(123);
// }

// const show = function (name: string = "llq", age?: number): string {
//   return `aaa`;
// };

// const show =  (name: string = "llq", age?: number): any=> {
//   return `aaa`;
// };

// const view = (num: number): void | string => {
//   return '1' + num;
// };
// console.log(view(1));

// let obj: Object = {}
// let fn: Function = function () {

// }

// let vaue: number | string = 1;
// console.log(vaue);
// let value: undefined = undefined;
// console.log(value);

/**
 * 接口 针对对象的验证
 */
interface fullName {
  firstName: string;
  secondName?: string;
  age: number;
  info?: any;
}
/**
 * 函数类型接口  (只能用于函数表达式)
 */
interface fn {
  (params1: any, params2: number): string;
}

// const tt: fn = function () {
//   return "aga";
//   // return 1;
// };
const ee: fn = () => {
  return "g";
};

// console.log(tt(1, 1));
// console.log(ee(1, 1));

const printName = (fullName: fullName): void => {
  console.log(fullName.firstName + "----" + fullName.secondName + fullName.age);
};
const printName1 = (fullName: {
  [key: string]: any;
  firstName: string;
  secondName?: string;
  age: number;
  info?: any;
}): void => {
  console.log(fullName.firstName + "----" + fullName.secondName + fullName.age);
};

const params = {
  firstName: "llq",
  age: 20,
};
// printName1(params);

// let { data } = {
//   data: [1, 1, 2, 3],
// };
// let [a, b] = [1, 2];
// console.log(a, b, data);
enum State {
  aa = 1,
  bb = 2,
}

/***************类接口*********** */
interface proson {
  name: string;
  sing(val: string): void;
  [key: string]: any;
}

class To {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  jump(): number {
    return 11;
  }
}
// protected可以在父类和子类中访问---- private只能本身类访问----public(默认)任何地方都可以访问
//implements 用在泛型接口中
// class User extends To implements proson {
//   age: number;
//   constructor(name: string, age: number) {
//     super(name);
//     this.age = age;
//   }
//   sing(val: string) {
//     console.log(this.name + val + this.age);
//   }
//   eat() {
//     console.log(super.jump() + 44);
//   }
// }
// let ap = new User('h', 20);
// a.sing("爱你");
// a.eat();
/*******************泛型(针对于函数或者类),在函数括号前声明泛型函数,在class类名后面声明泛型类*******传入的参数会将其类型传递给泛型<T>/
function getData<T>(value: T): T {
  return value;
}
function getData1<T>(value: T): any {
  return 456;
}

const getData2 = <T>(value: T): T => {
  return value;
};
// console.log(getData<number>(1));
// console.log("22".charCodeAt(0));
// console.log("a" > "n");

class demo<T> {
  protected list: T[] = [];
  add(item: T) {
    this.list.push(item);
  }
  getMin(): T {
    return this.list.reduce((t, l) => (t < l ? t : l));

    // return Math.min(null, ...this.list);

    // let firstVal: T = this.list[0];
    // for (let i = 0; i < this.list.length; i++) {
    //   if (firstVal > this.list[i]) firstVal = this.list[i];
    // }
    // return firstVal;
  }
}
let p = new demo<number>();
p.add(1);
p.add(156);
p.add(178);
p.add(51);
p.add(11);
// console.log(p.getMin());

function daojishi(): void {
  let i: number = 6;
  let timeId = setInterval((): void => {
    console.log(i);
    i--;
    if (i < 0) clearInterval(timeId);
  }, 1000);
}

interface Pro {
  // name: string;
  // age?: number;
  // readonly id: number | string;
  [key: string]: any;
}
//当需要新增对象属性的时候,在对象接口中定义[key: string]:any  !!!
let obj: Pro | null = Object.freeze({
  name: "zhangsan",
  age: 25,
  id: 1,
});

// obj["tt"] = 511515;
// obj.oo = 12;
// delete obj.oo;
// delete obj.age;

// obj = null;

// console.log(obj);

let aaa = Object.freeze([1, 2, 3, 4]);
aaa = [];

let hd: number[] | string[] = [];
// console.log(hd);

// console.log(aaa);
//不能改变的数组
// let ro: ReadonlyArray<number> = aaa;
// ro = [];
let ff: readonly number[] = [1];
// ff = [1213];
// console.log(ro);
// console.log(ff);
async function seelp(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}
//泛型接口
interface fnLink {
  <T>(params1: T, params2: T): T;
}
interface fnLink  <T>{
 (params1: T, params2: T): T;
}
const handlePageJump: fnLink = <T>(params1: T): T => {
  return params1;
};
handlePageJump<number>(1, 3);
/*************************************************************/
//定义泛型类
// class Change<T> {
//   updata(info: T, id: number): boolean {
//     console.log(info);
//     console.log(id);
//     return true;
//   }
// }
// 把类当做参数传递给泛型类 就和类接口有点类似  类接口不需要实例化 但是类必须实例化
// class Admin {
//   name: string | undefined;
//   password: number | undefined;
//   constructor(obj: { name: string | undefined; password: number | undefined }) {
//     this.name = obj.name;
//     this.password = obj.password;
//   }
// }
// let q = new Admin({
//   name: 'admin',
//   password: 123,
// });

// let c = new Change<Admin>();
// c.updata(q, 1);

//装饰器 (本质就是一个方法) 扩展被装饰的方法 属性 行为 类
/* 

// 类装饰起(普通模式 无参数)
function llq(params: any) {
  // console.log(params);//当前类
  return class extends params {
    url: string | undefined = "k";
    name: string | undefined = "l";
    eat() {
      console.log("535");
    }
  };
}
function llq(params: any) {
  // console.log(params);//当前类
} 
*/

// 类装饰起(工厂模式 有参数)
// function llq(params: string) {
//   return function (targetParams: any) {
//     // console.log(params);
//     // console.log(targetParams);//当前类
//   };
// }
// // 属性装饰器
// function protype(params: string) {
//   return function (targetParams: any, attr: any) {
//     console.log(params);
//     console.log(targetParams, attr); //当前类的原型
//     targetParams[attr] = params;
//   };
// }
// //方法装饰器
// function method(params: string) {
//   console.log(params); //参数
//   return function (targetParams: any, methodNanme: any, desc: any) {
//     console.log(targetParams); //当前类的原型
//     console.log(methodNanme); //方法名
//     console.log(desc); //方法描述 可以修改扩展方法

//     const oldMethod = desc.value;
//     desc.value = function (...args: any[]) {
//       args.map(item => String(item));
//       //调用以前的方法 , this只想当前调用的对象 就是实例的对象
//       oldMethod.apply(this, args);
//     };
//   };
// }
// //参数装饰器
// function pparm(val) {
//   return function (targetParams: any, methodNanme: any, index: number) {
//     console.log(targetParams); //当前类的原型
//     console.log(methodNanme); //方法名
//     console.log(index); //参数索引可以修改扩展方法
//   };
// }

// @llq("zhuangshiqi")
// class Start {
//   @protype("www")
//   url: string | undefined;
//   name: string | undefined;
//   constructor(name: string, url?: string | undefined) {
//     this.name = name;
//     this.url = url;
//   }
//   @method("方法装饰器")
//   eat(...args: any[]) {
//     console.log("吃吃吃");
//   }
//   sing(@pparm("参数装饰器") id: number) {
//     console.log(id);
//   }
// }
// let s = new Start("李四");

// console.log(s.__proto__.url);

// 定义类型
// type obj = {
//   name: string;
//   age?: number;
// };
// const ii: obj = {
//   name: "18",
// };
// console.log(ii);

// const randomSort = (arr: any[]) => arr.sort((a: any, b: any): number => Math.random() - 0.5);
