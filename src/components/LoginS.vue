<!--
 * @Author: your name
 * @Date: 2021-08-09 17:49:39
 * @LastEditTime: 2021-08-10 09:54:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\components\LoginS.vue
-->
<template>
  <div>provide/inject:{{ foo }}</div>
</template>

<script lang="ts">
import {
  InjectionKey,
  provide,
  inject,
  defineComponent,
  defineAsyncComponent,
} from "vue";
export default defineComponent({
  data() {
    return {
      todos: [12, 12, 13, 16],
    };
  },
  provide() {
    return {
      todoLength: this.todos.length,
    };
  },
  setup() {
    const foo = inject("foo");
    // console.log(foo);

    return {
      foo,
    };
  },
});
</script>

<style></style>
