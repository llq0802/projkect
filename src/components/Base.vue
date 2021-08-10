<!--
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-08-10 10:53:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\components\Base.vue
-->
<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <h4>{{ title }}</h4>
    <h4>{{ msgNew }}</h4>
    <br />
    <button @click="changePageTitle('新的标题')">修改标题</button>
    <br />
    <div>
      <slot name="top"> 这是默认插槽头部的信息</slot>
    </div>
    <div>
      <slot name="main" :list="list"> 这是默认插槽主体的信息</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
    title: String,
  },
  emits: ["update:title"],
  components: {},
  watch: {},
  computed: {},
})
class Base extends Vue {
  /**
   * data
   */
  msg!: string;
  title!: string;
  count: number = 1;
  list: any[] = [
    {
      name: "苹果",
      id: 1,
    },
    {
      name: "香蕉",
      id: 2,
    },
    {
      name: "葡萄",
      id: 3,
    },
  ];
  /**
   * metmods
   */
  changePageTitle(value: string): void {
    this.$emit("update:title", value);
  }
  /**
   * computed
   */
  get msgNew(): string {
    return this.msg + "-" + this.title;
  }
  set msgNew(value: string) {
    this.msg = value;
  }
}
export default Base;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
