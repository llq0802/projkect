<!--
 * @Author: your name
 * @Date: 2021-08-09 10:44:53
 * @LastEditTime: 2021-08-16 11:52:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\Home.vue
-->
<template>
  <div>
    <h1>关于</h1>
    12

    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    onMounted(() => {
      // 为给定 ID 的 user 创建请求
      axios({
        baseURL: "http://192.168.110.84:8888/",
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  },
});
</script>
