/*
 * @Author: llq
 * @Date: 2021-09-29 15:58:11
 * @LastEditTime: 2021-10-06 12:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\promise.js
 */

// let p = new HD((resolve, reject)=>{
//   resolve()
// })
// p.then(
//   (1)=>{},
//   ()=>{}
// )

// 版本一
class HD {
  constructor(executor) {
    // 初始状态
    this.status = 'pending';
    // 改变状态后的结果值（resolve或reject的参数值）
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.value = value;
      // then中的回调函数是异步执行的
      setTimeout(() => {
        this.callbacks.map((item) => {
          item.onResolve && item.onResolve(this.value);
        });
      });
    }
  }
  reject(value) {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((item) => {
          item.onReject && item.onReject(this.value);
        });
      });
    }
  }
  // Promise的then函数
  then(onResolve, onReject) {
    // 当传入不是函数，就自动返回
    if (typeof onResolve !== 'function') {
      onResolve = (value) => value;
    }
    if (typeof onReject !== 'function') {
      onReject = (value) => value;
    }
    const _this = this;
    // then函数返回的是Promise
    let thenPromise = new HD((resolve, reject) => {
      function callFn(type) {
        let result = type(_this.value);
        // then手动返回的Promise不能与上一次相同
        if (thenPromise == result) {
          throw new TypeError('Chaining cycle detected for promise');
        }
        try {
          if (result instanceof HD) {
            // result.then(resolve,reject) //是下面的简写方式
            result.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }
      if (this.status === 'fulfilled') {
        // then中的回调函数是异步执行的
        setTimeout(() => {
          callFn(onResolve);
        });
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          callFn(onReject);
        });
      }
      if (this.status === 'pending') {
        this.callbacks.push({
          onResolve: () => {
            callFn(onResolve);
          },
          onReject: () => {
            callFn(onReject);
          },
        });
      }
    });
    return thenPromise;
  }
  // 最后统一处理错误的catch方法
  catch(onReject) {
    // 传入undefined 等到最后的catch方法处理错误
    return this.then(undefined, onReject);
  }
  //成功的Promise
  static resolve(value) {
    return new HD((resolve, reject) => {
      if (value instanceof HD) {
        value.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      } else {
        resolve(value);
      }
    });
  }
  //失败的Promise
  static reject(value) {
    return new HD((resolve, reject) => {
      reject(value);
    });
  }
  // 同时完成的Promise
  static all(promiseArray) {
    return new HD((resolve, reject) => {
      //定义返回值数组
      let arr = [];
      promiseArray.forEach((promise, index) => {
        promise.then(
          // promise成功一定会走这个then方法
          (v) => {
            //不要使用arr.push()；异步的时候可能会使promiseArray的顺序与arr顺序不一样
            arr[index] = v;
            // 只有当每个promise都执行了then才调用成功
            if (arr.length === promiseArray.length) {
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
  // 赛跑的Promise
  static race(promiseArray) {
    return HD((resolve, reject) => {
      promiseArray.forEach((item, index) => {
        // item.then(resolve, reject)
        item.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      });
    });
  }
}

// 版本二
// let p = new Mypromise((resolve, reject)=>{
//   resolve(1)
// })
// p.then(
//   (i)=>{},
//   ()=>{}
// )
class Mypromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = null;
    this.callbacks = [];
    function resolve(value) {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
        setTimeout(() => {
          this.callbacks.forEach((callback) => {
            callback.onResolve && callback.onResolve(this.value);
          });
        });
      }
    }

    function reject(value) {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.value = value;
        setTimeout(() => {
          this.callbacks.forEach((callback) => {
            callback.onReject && callback.onReject(this.value);
          });
        });
      }
    }

    try {
      executor(resolve.bind(this), reject.bind(this));
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve, onReject) {
    if (typeof onResolve !== 'function') {
      onResolve = (value) => value;
    }
    if (typeof onReject !== 'function') {
      onReject = (value) => value;
    }
    let thenPromise = new Mypromise((resolve, reject) => {
      function callFn(resolveORreject) {
        let result = resolveORreject(this.value);
        if (thenPromise === result) {
          throw new Error('then函数不能返回上一次的Pomise');
        }
        try {
          if (result instanceof Mypromise) {
            result.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      }

      if (this.status === 'resolved') {
        setTimeout(() => {
          callFn(onResolve);
        });
      }

      if (this.status === 'rejected') {
        setTimeout(() => {
          callFn(onReject);
        });
      }

      if (this.status === 'pending') {
        this.callbacks.push({
          onResolve: () => {
            callFn(onResolve);
          },
          onReject: () => {
            callFn(onReject);
          },
        });
      }
    });

    return thenPromise;
  }

  catch(onReject) {
    this.then(undefined, onReject);
  }
  resolve(value) {
    return new Mypromise((resolve, reject) => {
      if (value instanceof Mypromise) {
        value.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      } else {
        resolve(value);
      }
    });
  }

  reject(value) {
    return new Mypromise((resolve, reject) => {
      reject(value);
    });
  }

  static race(promiseArray) {
    return new Mypromise((resolve, reject) => {
      promiseArray.forEach((promise) => {
        promise.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      });
    });
  }
  static all(promiseArray) {
    return new Mypromise((resolve, reject) => {
      let arr = [];
      promiseArray.forEach((promise, index) => {
        promise.then(
          // promise成功一定会走这个then方法
          (v) => {
            //不要使用arr.push()；异步的时候可能会使promiseArray的顺序与arr顺序不一样
            arr[index] = v;
            // 只有当每个promise都执行了then才调用成功
            if (arr.length === promiseArray.length) {
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
