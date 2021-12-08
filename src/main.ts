/*
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-12-08 15:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import ElementPlus from 'element-plus';
import './assets/css/global.scss';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/element-variables.scss';
import 'animate.css';

let app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);

// 插件先引入,最后在调用挂载app
app.mount('#app');
app.config.globalProperties.$axios = 'axios';
// 相当于以前vue2中的 vue.prototype 原型
// app.config.globalProperties  vue3中的原型

//父子组件加载顺序 home beforeCreate -> home created -> home beforeMount ->list beforeCreate->list created -> list beforeMount -> list mounted->home mounted

// 自定义指令
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});
app.directive('fixed', {
  mounted(el, binding) {
    el.style.position = 'fixed';
    // binding.value 是我们传递给指令的值——在这里是 200
    el.style.top = binding.value + 'px';
  },
});
