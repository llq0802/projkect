<!--
 * @Author: your name
 * @Date: 2021-08-12 11:23:17
 * @LastEditTime: 2021-08-12 11:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\views\Echarts.vue
-->
<template>
  <div id="echarts"></div>
</template>
<script lang="ts">
import * as echarts from "echarts";

import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  setup() {
    let option = reactive({
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    onMounted(() => {
      const chartDom = document.getElementById("echarts") as HTMLElement;
      console.log(chartDom);

      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
    });
  },
});
</script>
<style scoped lang="scss">
#echarts {
  width: 100%;
  // height: 500px;
  height: calc(100vh - 100px);
}
</style>
