/*
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-08-09 11:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

let app = createApp(App);
app.use(router);

// 插件先引入,最后在调用挂载app
app.mount("#app");

//父子组件加载顺序 home beforeCreate -> home created -> home beforeMount ->list beforeCreate->list created -> list beforeMount -> list mounted->home mounted
