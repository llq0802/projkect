<!--
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-11-02 17:00:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\App.vue
-->
<template>
  <div>
    <h1>你好Vue3</h1>
    <div class="head" style="margin-top: 20px; text-align: center">
      <el-button type="primary" @click="$router.push({ name: 'home' })"
        >首页</el-button
      >
      <el-button type="danger" size="medium" @click="handleJumpPage1"
        >关于</el-button
      >
      <el-button size="small" @click="handleJumpPage2">用户</el-button>
      <el-button size="mini" @click="handleJumpPage3">setup</el-button>
      <el-button @click="handleJumpPage4">异步</el-button>
      <el-button @click="handleJumpPage5">过渡</el-button>
      <el-button @click="handleJumpPage6">UI</el-button>
      <el-button @click="handleJumpPage7">echarts</el-button>
      <button class="animate__bounce">animate动画</button>
      <h1 class="animate__animated animate__bounce">An animated element</h1>
    </div>
    <hr />

    <!-- 一个页面对应多个组件 -->
    <!-- <router-view name="Top"></router-view> -->
    <!-- router-view中添加key 同一组件中的代码不重复 -->
    <!-- <keep-alive>
      <router-view :key="$route.fullPath"> </router-view>
    </keep-alive> -->
    <!-- 独占插槽 -->
    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- <router-view name="Buttom"></router-view> -->
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
class App extends Vue {
  msg: string = "这是Vue3x + vite + Typescript + 类组件";
  title: string = "这是标题";
  $router: any;
  handleJumpPage2() {
    this.$router.push({ path: "/user/15" });
  }
  handleJumpPage1() {
    this.$router.push({ path: "/about" });
  }
  handleJumpPage3() {
    this.$router.push({ path: "/login" });
  }
  handleJumpPage4() {
    this.$router.push({ path: "/dynamic" });
  }
  handleJumpPage5() {
    this.$router.push({ path: "/transition" });
  }
  handleJumpPage6() {
    this.$router.push({ path: "/elementuiplus" });
  }
  handleJumpPage7() {
    this.$router.push({ path: "/echarts" });
  }
}
export default App;
</script>

<style lang="scss">
@import url("./index.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
