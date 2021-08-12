<!--
 * @Author: your name
 * @Date: 2021-08-10 14:53:17
 * @LastEditTime: 2021-08-10 15:25:29
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
      <button @click="show = !show">
        Toggle切换
      </button>

      <transition name="fade">
        <p v-show="show">hello,world</p>
        <!-- <p v-if="show">疾风剑豪发个话费</p> -->
      </transition>
    </div>

    <div id="demo1">
      对于条件渲染的时,设置模式 mode="out-in" in-out: 新元素先进行过渡，完成之后当前元素过渡离开。
      out-in: 当前元素先进行过渡，完成之后新元素过渡进入。
      <transition mode="out-in" name="mode-fade">
        <button v-if="on" key="on" @click="on = false">
          on
        </button>
        <button v-else key="off" @click="on = true">
          off
        </button>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let show = ref(true);
    let on = ref(false);

    return {
      show,
      on,
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
