<!--
 * @Author: your name
 * @Date: 2021-08-09 10:46:02
 * @LastEditTime: 2021-08-10 14:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\User.vue
-->
<template>
  <div>
    <h1>用户{{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
import { InjectionKey, provide, inject, defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    onMounted(() => {});
  },
});
</script>

<style></style>script
