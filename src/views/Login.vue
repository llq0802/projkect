<!--
 * @Author: your name
 * @Date: 2021-08-09 16:19:16
 * @LastEditTime: 2021-12-20 17:06:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\views\Login.vue
-->
<template>
  <div>
    <h3>{{ count }}</h3>
    <span>{{ name }}</span
    >-<span>{{ age }}</span>
    <h3 ref="dl2">{{ dbCount }}</h3>
    <h1 ref="dl">denglu</h1>
    <h2 ref="dl1">3893</h2>
  </div>
</template>

<script lang="ts">
import {
  onActivated,
  defineComponent,
  ref,
  toRefs,
  computed,
  reactive,
  watch,
  watchEffect,
  onMounted,
  getCurrentInstance,
  nextTick,
  provide,
  inject,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import sym from "@/components/LoginS.vue";
interface setUser {
  name: string;
  age?: number;
  [key: string]: any;
}

export default defineComponent({
  props: {},
  emits: [],
  components: {
    sym,
  },

  setup(props, context) {
    const internalInstance: any = getCurrentInstance();
    console.log(internalInstance);
    onActivated(() => {
      console.log(111);
    });
    // 访问 globalProperties vue原型
    // console.log(internalInstance.appContext.config.globalProperties);

    const router = useRouter();
    const route = useRoute();

    // console.log(route, router);
    const list: any[] = reactive(["aa", "bb", "cc"]);
    let count = ref<number>(1);
    const user: setUser = reactive({
      name: "llq",
      age: 20,
    });
    let dl = ref();
    let dl2 = ref();
    let dl1 = ref();

    let dbCount = computed((): number => (count.value * 2) as number);

    // console.log(nextTick);返回一个Promise

    // watchEffect()不管怎么样都要执行一次 不能获取新 旧值

    // const foo: InjectionKey<string> = Symbol();
    // 导出 传给子组件
    provide("foo", "这是foo的值"); // 提供非字符串值将导致错误

    // 子组件导入
    // const foo = inject<string>("foo"); // string | undefined

    watch(count, (newValues, prevValues) => {
      console.log(newValues, prevValues);
    });

    watch(
      () => [...list],
      (numbers, prevNumbers) => {
        console.log(numbers, prevNumbers);
      },
      { deep: true }
    );
    onMounted(() => {
      console.log(dl);
      console.log(dl1);
      console.log(dl2);
      console.log(context);
    });

    return {
      count,
      ...toRefs(user),
      dbCount,
      list,
      dl,
      dl1,
      dl2,
    };
  },
});
</script>
