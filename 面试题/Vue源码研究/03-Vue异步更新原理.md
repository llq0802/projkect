<!--
 * @Author: your name
 * @Date: 2022-01-12 09:30:05
 * @LastEditTime: 2022-01-12 09:36:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue源码研究\03-Vue异步更新原理.md
-->

## vue 中如何实现异步更新？

vue 中的异步更新机制主要是利用了 浏览器的异步任务队列 来实现的，首选 微任务队列，其次选 宏任务队列。

1. 当响应式数据发生更改后，会在 setter 中调用 dep.notify 方法，通知 dep 中收集的所有 watcher 执行更新，即调用 watcher.update 方法，
2. 这个方法会把当前 watcher 加入到全局的 watcher 队列 queue（其实就是数组,会判重处理）。
3. 如果 callbacks 队列中不存在 flushSchedulerQueue 函数,然后通过 nextTick 方法把 刷新 watcher 队列的方法，即 flushSchedulerQueue() 添加到全局的 callbacks 数组当中。
4. 如果当前浏览器的异步任务队列中 不存在 flushCallbacks 函数，就通过 timerFunc 方法使用异步去执行 flushCallbacks 方法，这个方法会把 callbacks 清空并执行里面所有 flushSchedulerQueue 函数。
5. 如果当前浏览器的异步任务队列中 存在 flushCallbacks 函数，那么就会等待当前异步队列中的 flushCallbacks 函数执行完成后，在加入下一个 flushCallbacks 函数。
6. 其中负责刷新 watcher 队列的 flushSchedulerQueue() 函数，首先会根据 watcher 的 id 排序（优化性能，保证父组件先更新，子组件后更新），就会执行 queue 队列中的每个 watcher.run() 方法，从而进入更新阶段，如：执行组件的更新函数 updateComponents 或执行用户 watch 回调。

## vue 中的 nextTick 原理是什么？

Vue-nextTick 在官方文档解释中，是用于在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用这个方法，获取更新后的 DOM。

- 在 nextTick 中，会把接收的回调函数 cb 使用 try catch 进行包裹，目的是方便进行异常捕获和传递 this 绑定，之后会把这个 cb 存入到 全局的 callbacks 数组中
  执行 timerFunc，通过浏览器的异步循环队列去执行 flushCallbacks 函数清空 callbacks 数组并执行里面的回调函数
