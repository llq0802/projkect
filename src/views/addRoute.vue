<!--
 * @Author: your name
 * @Date: 2021-12-08 15:19:06
 * @LastEditTime: 2021-12-09 09:23:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\src\views\addRoute.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-08-16 11:54:32
 * @LastEditTime: 2021-08-16 16:30:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\views\request.vue
-->
<template>
  <div>
    <h1>addRoute</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    let api = "/api/list";
    onMounted(() => {});
  },
});
</script>
