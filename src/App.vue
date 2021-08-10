<!--
 * @Author: your name
 * @Date: 2021-08-09 10:15:14
 * @LastEditTime: 2021-08-10 14:43:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\App.vue
-->
<template>
  <div>
    <!-- <router-link to="/">go首页</router-link>
    <router-link to="about">go关于</router-link>
    <router-link to="user">go用户</router-link> -->

    <!-- 一个页面对应多个组件 -->
    <!-- <router-view name="Top"></router-view> -->

    <!-- router-view中添加key 同一组件中的代码不重复 -->
    <!-- <keep-alive>
      <router-view :key="$route.fullPath"> </router-view>
    </keep-alive> -->
    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- <router-view name="Buttom"></router-view> -->
    <hr />
    <button @click="$router.push({ name: 'home' })">首页</button>
    <button @click="handleJumpPage1">关于</button>
    <button @click="handleJumpPage2">用户</button>
    <button @click="handleJumpPage3">setup</button>
    <button @click="handleJumpPage4">异步</button>
    <button @click="handleJumpPage5">过渡</button>
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
