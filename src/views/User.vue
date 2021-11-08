<!--
 * @Author: your name
 * @Date: 2021-08-09 10:46:02
 * @LastEditTime: 2021-11-02 17:10:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\User.vue
-->
<template>
  <div>
    <h1>用户{{ $route.params.id }}</h1>
  </div>
  <div class="mask-container" @click="boxClick">
    <div class="mask" @click="maskClick"></div>
  </div>
</template>


<script lang="ts" setup>
</script>


<script lang="ts">
import {
  provide,
  inject,
  defineComponent,
  onMounted,
  onActivated,
  getCurrentInstance,
} from "vue";
export default defineComponent({
  setup() {
    const internalInstance = getCurrentInstance();
    console.log(internalInstance);

    const maskClick = (e: Event) => {
      console.log(1);

      console.log(e);
    };
    const boxClick = (e: Event) => {
      console.log(e);
    };
    onMounted(() => {
      console.log(21);
    });
    return {
      maskClick,
      boxClick,
    };
  },
});
</script>

<style>
.mask-container {
  position: relative;
  width: 500px;
  height: 500px;
  background: rgb(110, 86, 165);
}
.mask {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 300px;
  border: 1px #000 dashed;
}
</style>
