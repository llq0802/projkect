<!--
 * @Author: your name
 * @Date: 2022-01-11 11:16:34
 * @LastEditTime: 2022-01-11 11:43:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue源码研究\02-Vue数据初始化.md
-->

# Vue 响应式原理是如何实现的？

注意 data 配置项在进行 observe 处理时一定会是个对象，详细可看 initData () 方法

其核心是通过  Object.defineProperty  对数据的访问和设置进行拦截处理
以 data 配置项为例，通过 new Observer() 对其进行处理，此时当前响应式目标数据会被分为 对象 和 数组 两类

对象：调用 this.walk() 方法，遍历对象上所有的 key 通过 Object.defineProperty 设置 getter 和 setter 实现拦截；如果属性值依旧为 对象，则递归为 嵌套对象 上的每个 key 设置 getter 和 setter

通过 key 访问数据时触发 getter ，此时会进行依赖收集，即使用 dep.depend() 把相关的 watcher 保存在 dep 中
通过 key 设置数据时触发 setter，此时通过 dep.notify() 通知相关的 watcher 进行更新，即调用 watcher.update()

数组：重新对数组上的 7 个方法进行覆盖，实现对数组原型方法的拦截

通过遍历对数组的每一项元素通过 new Observer() 进行响应式处理，前提是当前数组项为 对象 或 数组
当该数组进行调用 push、unshift、splice 方法时，认为属于 插入、替换 操作，此时需要对当前传入的新数组项进行 new Observer() 处理，最终是要触发了这 7 个方法之一都会由 dep.notify() 通知 watcher 进行更新，即调用 watcher.update()

## methods、computed、watch 有什么区别？

使用场景

methods —— 包含比较复杂的组件处理逻辑，可包含 同步逻辑 和 异步逻辑
computed —— 使用于简单的数据处理并返回结果，主要是为了减少在模板上的逻辑处理，因此只适用于 同步逻辑
watch —— 主要用于监听组件数据变化时，需要进行复杂的操作，可包含 同步逻辑 和 异步逻辑

区别

computed 和 methods

methods —— 多次使用同一个 methods ，那么它就会被执行多次
computed —— 默认是 懒执行 的，并且不可进行配置，在一次渲染中多次使用 computed 属性只会调用一次，即其计算结果具有 缓存 特性，本质上是通过 watcher.dirty 属性进行控制实现的

computed 和 watch

本质上都是通过 Watcher 实现的，但 computed 是懒执行不可配置，而 watch 可以通过 options.immediate 进行配置

watch 和 methods

它们并不适合进行比较，因为属于不同的内容，因此只能从包含关系进行区分，watch 中的复复杂逻辑可以抽离成一个个的 metods 中

## vue 如何处理 props、data、methods、computed 中的属性 key 重复问题？

vue 中对每个配置项中 key 的定义都会做 判重处理，主要是依赖它们的优先级：
propsKey > methodsKey > dataKey > computedKey (computedKey 不受 methodsKey 影响)
