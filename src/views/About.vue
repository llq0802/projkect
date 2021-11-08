<!--
 * @Author: your name
 * @Date: 2021-08-09 10:44:53
 * @LastEditTime: 2021-11-01 09:13:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\Home.vue
-->
<template>
  <div>
    <h1>关于</h1>
    <template v-for="item in arr" :key="item.value">
      <div>
        {{ item.title }}
      </div>
    </template>

    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, watchEffect } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    console.log(1);

    let arr = reactive([
      { title: "你好1", value: "1111" },
      { title: "你好2", value: "1112" },
      { title: "你好3", value: "1113" },
      { title: "你好4", value: "1114" },
    ]);

    onMounted(() => {
      watchEffect(() => {
        console.log("watchEffect");
      });
      // 为给定 ID 的 user 创建请求
      // axios({
      //   baseURL: "http://192.168.110.84:8888/",
      // })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    });
    return {
      arr,
    };
  },
});
</script>
