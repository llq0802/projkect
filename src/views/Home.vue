<!--
 * @Author: your name
 * @Date: 2021-08-09 10:44:53
 * @LastEditTime: 2021-08-31 09:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\Home.vue
-->
<template>
  <div>
    <h1>首页</h1>

    <!-- 父子组件双向绑定数据 -->
    <Base :msg="msg" v-model:title="title">
      <!-- 插槽作用域 -->
      <template #main="obj">
        作用域插槽:
        <span v-for="(item, index) in obj.list" :key="index">
          {{ item.name }}---{{ item.id }}
        </span>
      </template>
    </Base>

    <br />

    <div ref="dd">123</div>
    <input type="text" ref="inp" @change="inpChange" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Base from "@/components/Base.vue";

// 装饰器
@Options({
  components: {
    Base,
  },
})
class About extends Vue {
  msg: string = "Vue3x-vite-Typescript-类组件";
  title: string = "这是标题";
  mounted() {
    // console.log(this.$refs.inp);
    // console.log(this.$refs.dd);
  }
  //原生Dom 的事件函数 应该指明参数类型,如果是事件对象,应该指明为Event类型
  inpChange(e: Event) {
    console.log((e.target as HTMLInputElement).value);
    // HTMLInputElement
    // HTMLDivElement
  }
}
export default About;
</script>
