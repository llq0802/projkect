<!--
 * @Author: your name
 * @Date: 2021-08-10 09:33:30
 * @LastEditTime: 2021-08-10 10:39:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\components\Main.vue
-->
<template>
  <div>
    主体
  </div>
</template>
<script>
import { defineComponent, onActivated } from "vue";

export default defineComponent({
  activated() {
    console.log("缓存的组件 进去");
  },
  deactivated() {
    console.log("缓存的组件 出去");
  },
  setup() {
    onActivated(() => {
      console.log(" 进去");
    });
  },
});
</script>
