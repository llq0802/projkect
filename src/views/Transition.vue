<!--
 * @Author: your name
 * @Date: 2021-08-10 14:53:17
 * @LastEditTime: 2021-12-24 12:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\views\Transition .vue
-->
<template>
  <div>
    <h3>
      过渡: 进入的时候enter-active:(包括enter-from ,enter-to) ->
      离开的时候leave-active:(包括:leave-from,leave-to )
    </h3>
    <div id="demo">
      <button @click="show = !show" ref="btn">Toggle切换</button>

      <transition name="fade">
        <p v-show="show">hello,world</p>
        <!-- <p v-if="show">疾风剑豪发个话费</p> -->
      </transition>
    </div>

    <div id="demo1">
      对于条件渲染的时,设置模式 mode="out-in" in-out:
      新元素先进行过渡，完成之后当前元素过渡离开。 out-in:
      当前元素先进行过渡，完成之后新元素过渡进入。
      <transition mode="out-in" name="mode-fade">
        <button v-if="on" key="on" @click="on = false">on</button>
        <button v-else key="off" @click="on = true">off</button>
      </transition>
    </div>

    <div>
      <div v-for="(item, index) in list" :key="index" :ref="getRefList">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onMounted,
  onBeforeUpdate,
  watchEffect,
  onUpdated,
} from "vue";

export default defineComponent({
  setup() {
    let btn = ref(null);
    let show = ref(true);
    let on = ref(false);
    let aaa = ref("s");
    let state = reactive({
      list: [11, 22, 33, 44],
    });
    let divs1 = ref([]);
    let divs: any[] = [];
    onMounted(() => {
      // console.log(btn);
      console.log(divs);
      // console.log(this);
      // console.log(self);
    });
    // onBeforeUpdate(() => {
    //   divs = [];
    // });
    onUpdated(() => {
      // console.log(divs);
    });
    const getRefList = (el: any) => {
      console.log("el", el);
      if (el) {
        divs.push(el);
      }
    };

    watchEffect(
      () => {
        //console.log(btn.value); // => <div>This is a root element</div>
      },
      {
        flush: "post", //等到DOM挂载完成时 再运行
      }
    );
    return {
      ...toRefs(state),
      divs,
      show,
      on,
      btn,
      getRefList,
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
</style>
