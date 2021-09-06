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
    <h1>请求</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    let api = "/api/list";
    onMounted(() => {
      // axios
      //   .get(api)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      fetch("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
        .then((res) => res.json())
        
    });
  },
});
</script>
