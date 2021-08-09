<!--
 * @Author: your name
 * @Date: 2021-08-09 10:44:53
 * @LastEditTime: 2021-08-09 14:46:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\Home.vue
-->
<template>
  <div>
    <h1>首页</h1>
    <Base :msg="msg" v-model:title="title">
      <template #main="list">
        <p v-for="(item, index) in list.list" :key="index">
          {{ item.name }}---{{ item.id }}
        </p>
        这是新的插槽信息
      </template>
    </Base>
  </div>
</template>
<script lang="ts">
import Base from "@/components/Base.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    Base,
  },
  props: {},
  watch: {},
  computed: {},
})
class About extends Vue {
  msg = "Vue3x-vite-Typescript-类组件";
  title = "这是标题";
}
export default About;
</script>
