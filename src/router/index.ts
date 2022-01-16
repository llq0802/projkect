/*
 * @Author: your name
 * @Date: 2021-08-09 10:27:50
 * @LastEditTime: 2021-12-24 14:56:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\router\index.ts
 */

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const Home = () => import('../views/Home.vue');
const Table = () => import('../views/Table.vue');
const Render = () => import('../views/Render.vue');
const About = () => import('../views/About.vue');
const addRoute = () => import('../views/addRoute.vue');
const User = () => import('../views/User.vue');
const Login = () => import('../views/Login.vue');
const Dynamic = () => import('../views/Dynamic.vue');
const Transition = () => import('../views/Transition.vue');
const ElementUiPlus = () => import('../views/ElementUiPlus.vue');
const Echarts = () => import('../views/Echarts.vue');
const Request = () => import('../views/Request.vue');
const News = () => import('../components/News.vue');
const News2 = () => import('../components/News2.vue');
// const Top = () => import("../components/Top.vue");
// const Buttom = () => import("../components/Buttom.vue");
const NotFound = () => import('../components/NotFound.vue');

const routes: any[] = [
  {
    path: '/',
    name: 'home',
    //  一个页面对应多个组件
    component: Home,

    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于',
    },
    // redirect: "/about/news",
    children: [
      {
        path: '',
        component: News2,
      },
      {
        path: 'news',
        // path: /news",
        name: 'news',
        component: News,
      },
      {
        path: 'news2',
        // path: /news",
        name: 'news2',
        component: News2,
      },
    ],
  },
  {
    path: '/user/:id(\\d+)',
    name: 'user',
    component: User,
    meta: {
      title: '用户',
    },
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: Dynamic,
    meta: {
      title: '异步',
    },
  },
  {
    path: '/transition',
    name: 'transition',
    component: Transition,
    meta: {
      title: '过渡',
    },
  },
  {
    path: '/elementUiplus',
    name: 'elementUiplus',
    component: ElementUiPlus,
    meta: {
      title: 'ui',
    },
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: Echarts,
    meta: {
      title: 'ke',
    },
  },
  {
    path: '/request',
    name: 'request',
    component: Request,
    meta: {
      title: 'ke',
    },
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
    meta: {
      title: 'table',
    },
  },
  {
    path: '/render',
    name: 'render',
    component: Render,
    meta: {
      title: 'render',
    },
  },
  // {
  //   path: '/addRoute',
  //   name: 'requaddRouteest',
  //   component: addRoute,
  //   meta: {
  //     title: 'addRoute',
  //   },
  // },

  // {
  //   // path: "/:path(.*)",
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   component: NotFound,
  //   meta: {
  //     title: '404',
  //   },
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to) => {
// router.addRoute({
//   path: '/123',
//   component: addRoute,
// });
//   // 我们也可以使用 this.$route 或 route = useRoute() （在 setup 中）
//   router.replace(router.currentRoute.value.fullPath);

//   // router.replace(to.fullPath);
//   // router.options.routes.push({
//   //   path: '/addRoute',
//   //   component: addRoute,
//   // });
//   console.log(router.getRoutes());
//   // console.log(router.options.routes);
//   // next({ ...to, replace: true });

//   // router.addRoute({
//   //   path: '/addRoute',
//   //   component: addRoute,
//   // });

//   // return to.fullPath;
// });
router.beforeEach((to, from, next) => {
  // if (to.fullPath != '/addRoute') {
  //   next();
  //   console.log(router.getRoutes());
  //   return;
  // } else {
  //   router.addRoute({
  //     path: '/addRoute',
  //     component: addRoute,
  //   });
  //   console.log(router.getRoutes());
  //   console.log(to.fullPath);
  // }

  // // // 触发重定向
  // return to.fullPath;
  router.addRoute({
    path: '/123',
    component: addRoute,
  });
  // console.log(router);
  next();
});
export default router;
