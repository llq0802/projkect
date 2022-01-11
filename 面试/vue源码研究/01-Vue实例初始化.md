<!--
 * @Author: your name
 * @Date: 2021-12-28 17:13:10
 * @LastEditTime: 2022-01-11 11:47:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue源码研究\vue初始化过程.md
-->

# Vue 初始化

## 1.合并根组件或者子组件配置选项

子组件
子组件进行合并配置项时，主要是通过打平配置项，减少原型链动态查找，将组件配置对象上的一些深层次属性放到 vm.\$options 选项中， 达到性能优化的目的.
根组件
根组件合并配置，就是将全局配置项合并到根组件局部配置项中.

- 根组件合并会发生在三个地方：

1. 组件实例初始化的时候
2. Vue.component(name, Comp) 时，将合并 Vue 内置全局组件 和 用户注册的全局组件，最终都会合并到跟组件上配置上的 components 选项中
3. { components:{xxx} } 局部注册，执行编译器生成 render 函数时，会合并全局配置对象到组件局部配置对象上

## 2.初始化组件实例的关系属性 initLifecycle(vm)

比如 $parent、$children、$root、$refs 等

## 3.初始化自定义事件 initEvents(vm)

当在组件上使用自定义事件时，父组件和子组件谁负责监听这个事件？ 答案是子组件本身
其实 @myClick="clickHandle" 会被编译为 this.$emit('myClick') 和 this.$on('myClick', function clickHandle(){}) 的形式，而这个 this 就是组件实例，即谁需要触发事件，谁就需要监听事件.

## 4.初始化插槽，定义 vm.\_c ,vm.createElement 方法 initRender(vm)

如：vm.$slots、vm.$scopedSlots
定义 \_c 方法，即 createElement 方法，也就是 h 函数

## 5. 调用 beforeCreate 生命钩子函数，

callHook(vm, 'beforeCreate')

## 6.初始化 inject 选项 initInjections(vm)

得到 ret[key] = val 形式的配置对象，然后对该配置对象进行响应式处理，并代理每个 key 到 vm 实例上

## 7. 初始化 state 数据，initState(vm)

数据响应式，处理 props、methods、data、computed、watch 等选项

## 8.处理 provide 选项 initProvide(vm)

解析组件配置项上的 provide 对象，将其挂载到 vm.\_provided 属性上

## 9.调用 created 钩子函数

callHook(vm, 'created')

## 10. $mount 挂载  vm.$mount(el)

如果发现配置项上有 el 选项，则自动调用 $mount 方法，也就是说有了 el 选项，就不需要再手动调用 $mount 方法，反之，没提供 el 选项则必须调用 \$mount

## 11.接下来则进入挂载阶段 mountComponent(vm)

``
initLifecycle(vm)

initEvents(vm)

initRender(vm)

callHook(vm, 'beforeCreate')

initInjections(vm)

initState(vm)

initProvide(vm)

callHook(vm, 'created')

vm.\$mount(el)

```


## 问题：beforeCreate 中能获取能访问什么内容，data 可以访问吗？

从源码中很容易看出来，在 beforeCreate 之前只初始化了 组件关系属性、自定义事件、插槽 和 _c 方法，所以关于可以访问的就是这些内容
因为 data、props、methods 等都没有进行初始化，所以beforeCreate就都不能进行访问，
最早能访问数据(props,methods,data,computed,watch)的地方其实就是 created 当中了.
当然如果你在 beforeCreate 中通过异步的方式访问，比如 setTimeout 其实是可以的，
```
