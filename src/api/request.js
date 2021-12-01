/*
 * @Author: your name
 * @Date: 2021-10-27 14:41:19
 * @LastEditTime: 2021-10-27 16:35:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\api\request.js
 */
/* 

import axios from "axios";
import { Message } from "element-ui";
// import { removeToken } from '@/utils/auth'

let baseURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "/api";
} else {
  baseURL = process.env.BASEURL;
}
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL, // api的base_url
  timeout: 10000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    // code为非200是抛错 可结合自己业务进行修改
  
    const res = response.data;
    // if (res.code !== 200) {
    //   Message({
    //     message: '失败',
    //     type: 'error',
    //     duration: 3 * 1000
    //   })
    //   // 401:未登录;
    // if (res.code === 401) {
    //   MessageBox.confirm(
    //     '你已被登出，可以取消继续留在该页面，或者重新登录',
    //     '确定登出',
    //     {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }
    //   ).then(() => {
    //     localStorage.removeItem('user_name')
    //     localStorage.removeItem('user_role')
    //     removeToken()
    //     this.$router.replace('/login')
    //     // location.reload(); // 为了重新实例化vue-router vuex对象 避免bug
    //   })
    // }
    return res;
  },
  error => {
    console.log("响应错误" + error); // for debug
    Message({
      message: "网速较慢,请稍后再试",
      type: "error"
    });
    return Promise.reject(error);
  }
);
export default service;

*/
