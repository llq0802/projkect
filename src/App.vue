<!--
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-08-09 15:45:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\App.vue
-->
<template>
  <div>
    <router-link to="/">go首页</router-link>
    <router-link to="about">go关于</router-link>
    <router-link to="user">go用户</router-link>

    <!-- 一个页面对应多个组件 -->
    <router-view name="Top"></router-view>
    <router-view></router-view>
    <router-view name="Buttom"></router-view>

    <hr />
    <button @click="$router.push({ name: 'home' })">首页</button>
    <button @click="handleJumpPage1">关于</button>
    <button @click="handleJumpPage">用户</button>
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
  handleJumpPage() {
    this.$router.push({ path: "/user/15" });
  }
  handleJumpPage1() {
    this.$router.push({ path: "/about" });
  }
}
export default App;
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
