// 调用upade方法把 watcher 都放到watcher队列里面去（会判重处理） 执行完队列的事件之后再清空队列 主要使用 nextTick方法 来执行 watcher 队列
/* 控制重复添加cb */
// 在 nextTick 中，会把接收的回调函数 cb 使用 try catch 进行包裹，目的是方便进行异常捕获，之后会把这个 cb 存入到 全局的 callbacks 数组中
// 执行 timerFunc，通过浏览器的异步循环队列去执行 flushCallbacks 函数清空 callbacks 数组并执行里面的回调函数
/**
 * Vue异步更新原理：
 *  调用watcher.upade方法中的queueWatcher函数把 watcher 都放到watcher队列里面去（会判重处理）
 *  将执行watcher队列的函数将执行watcher队列的函数flushQueueWatcher作为nexttick参数的回调函数（如果该函数已经在执行，等异步队列清空再执行)添加到全局的callbacks数组中
 *  利用浏览器异步队列，将执行的callbacks数组的函数flushCallbacks作为Promise成功的函数执行（如果该函数已经在执行， 等异步队列清空再执行 pendding节流阀）
 *  执行watcher队列的函数就会执行watcher队列中的每个watcher.run()方法（会对每个watcher排序，让其父组件先更新，子组件再更新），
 *  从而进入更新阶段，如：执行组件的更新函数 updateComponents 或执行用户 watch 回调。
 * （Promise>MutationObserver>setImmediate>settimeOut）
 */

let pending = false;
let callbacks = []; //回访nextTick的回调函数
function flushCallbacks() {
  pending = false; //把标志还原为false
  // 依次执行回调
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}
let timerFunc; //定义异步方法  采用优雅降级
if (typeof Promise !== 'undefined') {
  // 如果支持promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== 'undefined') {
  // MutationObserver 主要是监听dom变化 也是一个异步方法
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined') {
  // 如果前面都不支持 判断setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 最后降级采用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb, ctx) {
  // 除了渲染watcher  还有用户自己手动调用的nextTick 一起被收集到数组
  callbacks.push(() => {
    cb.call(ctx);
  });
  if (!pending) {
    // 如果多次调用nextTick  只会执行一次异步 等异步队列清空之后再把标志变为false
    pending = true;
    timerFunc();
  }
}
