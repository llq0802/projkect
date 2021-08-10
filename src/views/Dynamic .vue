<!--
 * @Author: your name
 * @Date: 2021-08-10 09:30:41
 * @LastEditTime: 2021-08-10 15:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\views\dynamic .vue
-->
<template>
  <div>
    <h3>
      动态组件component 里面的is属性可以整个组件标签. 在原生元素上使用 但要以 is:vue: 的形式
    </h3>
    <!-- is: - string | Component -->
    <!-- <template v-for="(item, index) in tabs" :key="index">
      <keep-alive>
        <component :is="item"></component>
      </keep-alive>
    </template> -->
    <transition name="component-fade" mode="out-in">
      <component :is="isShowComponent"></component>
    </transition>
    <template v-for="(item, index) in tabs" :key="index">
      <button @click="handleChangeComponent(item)">{{ item }}</button>
    </template>
    <h3>
      vuex:
    </h3>
    {{ currentCount }}
    <br />
    <button @click="jia">+commit</button>
    <button @click="jiao">+dispath</button>
  </div>
</template>
<script lang="ts">
import {
  ref,
  toRefs,
  reactive,
  onMounted,
  onDeactivated,
  defineComponent,
  defineAsyncComponent,
} from "vue";
import { useStore, mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Top from "../components/Top.vue";
import Buttom from "../components/Buttom.vue";
import Main from "../components/Main.vue";

export default defineComponent({
  components: {
    Top,
    Main,
    Buttom,
  },
  setup() {
    // 异步组件
    // defineAsyncComponent((): any => {
    //   return import("./components/Top.vue");
    // });
    const store = useStore();
    // 一旦解构响应式对象, 必须加上toRefs() 不然响应式就会失效
    const state = toRefs(store.state);
    // const state = store.state;
    console.log(store.state?.currentCount);
    const isShowComponent = ref<string>("Main");
    const tabs = reactive<string[]>(["main", "Top", "Main", "Buttom", "a"]);
    const handleChangeComponent = (params: string): any => {
      isShowComponent.value = params;
    };

    const jia = () => {
      store.commit("add", { value: 10 });
    };
    const jiao = () => {
      store.dispatch("yibuAdd", { value: 100 }).then((i): void => {
        console.log(i);
      });
    };
    onMounted(() => {});
    onDeactivated(() => {});
    return {
      tabs,
      handleChangeComponent,
      isShowComponent,
      ...state,
      // state,
      jia,
      jiao,
    };
  },

  // 自定义指令
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    fixed: {
      mounted(el, binding) {
        el.style.position = "fixed";
        // binding.value 是我们传递给指令的值——在这里是 200
        el.style.top = binding.value + "px";
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
