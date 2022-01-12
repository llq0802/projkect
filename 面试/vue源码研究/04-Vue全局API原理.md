<!--
 * @Author: your name
 * @Date: 2022-01-12 11:36:50
 * @LastEditTime: 2022-01-12 14:13:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue源码研究\04-Vue全局API原理.md
-->

## Vue.use(plugin) 的作用是什么？

Vue.use 是用来安装 Vue 插件的

- 如果插件是一个 对象，必须提供  install  方法
- 如果插件是一个 函数，它会被作为 install 方法
- 当 install 方法调用时，会将 Vue 作为参数传入
- 该方法需要在调用  new Vue()  之前被调用
- 当 install 方法被同一个插件 多次调用，插件将只会被安装一次

## Vue.mixin(options) 的作用是什么？

- Vue.mixin 本质上就是调用 mergeOptions()，作用就是将两个选项对象合并为一个新对象
- 首先对 props、inject、directives 选项进行标准化处理
- 处理 options 上的 extends 和 mixins，最终将它们合并到 全局配置 上
- options 配置 child 和 全局配置 parent 进行合并发生选项冲突时，options 配置会覆盖 全局配置

## PS：当使用组件配置项 mixins 进行混入配置项时

1. 没有冲突就正常进行合并选项
2. 除了 生命周期 钩子发生冲突时，会在组件对应生命周期钩子前被调用，其他如 methods、components  和  directives 等选项中发生冲突时以 组件 数据 优先

## Vue.component(compName, Comp) 的作用是什么？

Vue.component 用于注册全局组件.

- 本质上就是将 当前组件配置 注册到全局配置的 components 选项上（Vue.options.components），
- 然后各个子组件在生成 vnode 时会使用 Vue.extend 方法中 mergeOptions 将全局的 components 选项合并到每个子组件 components 配置项上。
- Vue.component(compName) 表示获取 compName 的组件构造函数
- 若 Comp 是组件配置对象，则使用 Vue.extend 方法得到组件构造函数，否则直接进行下一步
  在全局配置上添加当前组件信息，this.options.components = { compName：CompConstructor, xxx }

## Vue.directive('my-directive', definition) 的作用是什么？

- Vue.directive 用于注册或获取全局指令，在每个子组件在生成 vnode 时
- 会使用 Vue.extend 方法中 mergeOptions 将全局的 directives 选项合并到局部的 directives 选项中，如 this.options.directives = { directive：{xxx} }
- 如果 definition 为空，则会获取指定指令的配置对象
- 如果 definition 是一个函数，则会在 bind 和 update 时调用这个函数，相当于配置对象 { bind: definition, update: definition }

## Vue.filter('my-filter', definition) 的作用是什么？

- Vue.filter 用于注册或获取全局过滤器，在每个子组件在生成 vnode 时会将全局的 filters 选项合并到局部的 filters 选项中，如 this.options.filters = { filters：{xxx} }
- 如果 definition 为空，则获取 my-filter 过滤器的回调函数
- 如果 definition 为存在，则注册 this.options.filters['my-filter'] = definition

## Vue.extend(extendOptions) 的作用是什么？

1. Vue.extend 基于 Vue 创建一个子类，
2. 通过 mergeOptions(Super.options, extendOptions) 生成新的配置项作为该子类默认的全局配置，
   将 Vue.options 和 extendOptions 合并，如果选项冲突，则 extendOptions 会覆盖 Vue.options 中对应的内容，相当于进行预设
3. 因此子类也可以通过 extend() 方法得到自己的子类。
4. 定义子类构造函数，和基类 Vue 一样也是调用 this.\_init(options)
   给子类定义和 Vue 一样的全局 API，比如 Sub.extend = Super.extend
5. 向外返回子类 Sub

## 面试官 问：Vue.set(target, key, val) 做了什么

- 由于 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')，
- 所以通过 Vue.set 为向响应式对象中添加一个 property，可以确保这个新 property 同样是响应式的，且触发视图更新。
- 更新数组指定下标的元素：Vue.set(array, idx, val)，内部通过 splice 方法实现响应式更新
- 更新对象已有属性：Vue.set(obj, key ,val)，直接更新即可 => obj[key] = val
- 不能向 Vue 实例或者 \$data 动态添加根级别的响应式数据
- Vue.set(obj, key, val)，如果 obj 不是响应式对象，会执行 obj[key] = val，但是不会做响应式处理
- Vue.set(obj, key, val)，为响应式对象 obj 增加一个新的 key，则通过 defineReactive 方法设置响应式，并触发依赖更新

## Vue.delete(target, key) —— 做了什么

- 如果 target 是响应式对象，确保删除对应属性后能触发更新视图
- 如果 target 是数组，还是通过重写的 splice 方法进行删除元素
- 如果 target 是对象，则通过 delete target[key] + ob.dep.notify() 实现删除并更新视图
