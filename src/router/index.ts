/*
 * @Author: your name
 * @Date: 2021-08-09 10:27:50
 * @LastEditTime: 2021-08-10 15:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\router\index.ts
 */

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const User = () => import("../views/User.vue");
const Login = () => import("../views/Login.vue");
const Dynamic = () => import("../views/Dynamic .vue");
const Transition = () => import("../views/Transition .vue");

const News = () => import("../components/News.vue");
const News2 = () => import("../components/News2.vue");
// const Top = () => import("../components/Top.vue");
// const Buttom = () => import("../components/Buttom.vue");
const NotFound = () => import("../components/NotFound.vue");

const routes: any[] = [
  {
    path: "/",
    name: "home",
    //  一个页面对应多个组件
    component: Home,

    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "关于",
    },
    // redirect: "/about/news",
    children: [
      {
        path: "",
        component: News2,
      },
      {
        path: "news",
        // path: /news",
        name: "news",
        component: News,
      },
      {
        path: "news2",
        // path: /news",
        name: "news2",
        component: News2,
      },
    ],
  },
  {
    path: "/user/:id(\\d+)",
    name: "user",
    component: User,
    meta: {
      title: "用户",
    },
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: Dynamic,
    meta: {
      title: "异步",
    },
  },
  {
    path: "/transition",
    name: "transition",
    component: Transition,
    meta: {
      title: "过渡",
    },
  },

  {
    // path: "/:path(.*)",
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
    meta: {
      title: "404",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
