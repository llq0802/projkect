<!--
 * @Author: your name
 * @Date: 2021-08-09 10:44:53
 * @LastEditTime: 2021-08-10 14:37:25
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

export default defineComponent({
  setup() {
    onMounted(() => {});
  },
});
</script>
