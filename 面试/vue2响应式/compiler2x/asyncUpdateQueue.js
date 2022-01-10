/*
 * @Author: your name
 * @Date: 2022-01-10 12:10:45
 * @LastEditTime: 2022-01-10 15:37:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue2响应式\compiler2x\asyncUpdataQueue.js
 */

const queueWatcherArr = [];
const callbacks = [];
let flushing = false;
let waiting = false;
let pending = false;

export default function queueWatcher(watcher) {
  if (!queueWatcherArr.includes(watcher)) {
    if (flushing) {
      queueWatcherArr.push(watcher);
    } else {
      //to do
      let flag = false;
      for (let index = 0; index < queueWatcherArr.length; index++) {
        if (queueWatcherArr[index].id < watcher.id) {
          queueWatcherArr.splice(index + 1, 0, watcher);
          flag = true;
          break;
        }
      }
      if (!flag) {
        queueWatcherArr.unshift(watcher);
      }
    }

    if (!waiting) {
      waiting = true;
      nextTick(flushQueueWatcher(queueWatcherArr));
    }
  }
}

/**
 *
 *
 * @param {*} arr
 */
function flushQueueWatcher() {
  waiting = true;

  queueWatcherArr.sort((a, b) => a.id - b.id);

  while (queueWatcherArr.length) {
    const watcher = queueWatcherArr.shift();

    watcher.run();
  }
  flushing = waiting = false;
}

/**
 *
 *
 * @export
 * @param {*} cb
 */
export function nextTick(cb, ctx) {
  callbacks.push(() => {
    cb.call(ctx);
  });

  if (!pending) {
    pending = true;
    if (window.Promise) {
      Promise.resolve().then(flushCallbacks);
    } else if (typeof setImmediate !== 'undefined') {
      setImmediate(flushCallbacks);
    } else {
      setTimeout(flushCallbacks);
    }
  }
}

/**
 *
 *
 * @param {*} callbacks
 */
function flushCallbacks() {
  pending = false;
  for (let index = 0; index < callbacks.length; index++) {
    callbacks[index]();
  }
}
