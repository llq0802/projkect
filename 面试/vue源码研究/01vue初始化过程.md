<!--
 * @Author: your name
 * @Date: 2021-12-28 17:13:10
 * @LastEditTime: 2022-01-10 16:43:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\面试\vue源码研究\vue初始化过程.md
-->

## Vue 初始化主要就干了合并全局配置，初始化生命周期，初始化事件中心，初始化渲染，初始化 data、props、computed、watcher

```


initLifecycle(vm)

initEvents(vm)

initRender(vm)
callHook(vm, 'beforeCreate')

initInjections(vm)

initState(vm)

initProvide(vm)

callHook(vm, 'created')

vm.$mount(el)

```
