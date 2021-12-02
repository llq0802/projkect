<!--
 * @Author: your name
 * @Date: 2021-08-09 10:44:53
 * @LastEditTime: 2021-11-26 11:10:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-study\vue3.0-cli-ts\src\views\Home.vue
-->
<template>
  <div>
    <el-upload
      ref="upload"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false"
      :on-change="handleChange"
      :limit="1"
      :show-file-list="false"
    >
      <template #trigger>
        <el-button type="primary">选取EXCL文件</el-button>
      </template>

      <el-button style="margin-left: 10px" type="success" @click="submitUpload"
        >上传到服务器</el-button
      >
    </el-upload>
  </div>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <hr />
  <div>
    <h1>关于</h1>
    <template v-for="item in arr" :key="item.value">
      <div>
        {{ item.title }}
      </div>
    </template>

    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, watchEffect } from "vue";
import axios from "axios";
import xlsx from "xlsx";
export default defineComponent({
  setup() {
    let tableData = reactive([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
    function getS(file: any) {
      return new Promise((resolve, reject) => {
        const fileReadr = new FileReader();
        fileReadr.readAsBinaryString(file);
        fileReadr.onload = (e) => {
          resolve(e.target?.result);
        };
      });
    }
    const submitUpload = () => {
      console.log(111);
    };
    const handleChange = async (e: any) => {
      let file = e.raw;
      if (!file) return;
      let res = await getS(file);
      let workbook = xlsx.read(res, { type: "binary" });
      let worksheets = workbook.Sheets[workbook.SheetNames[0]];
      let data = xlsx.utils.sheet_to_json(worksheets);

      console.log(data);
    };

    let arr = reactive([
      { title: "你好1", value: "1111" },
      { title: "你好2", value: "1112" },
      { title: "你好3", value: "1113" },
      { title: "你好4", value: "1114" },
    ]);

    onMounted(() => {
      watchEffect(() => {
        console.log("watchEffect");
      });
      // 为给定 ID 的 user 创建请求
      // axios({
      //   baseURL: "http://192.168.110.84:8888/",
      // })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    });
    return {
      arr,
      submitUpload,
      handleChange,
      tableData,
    };
  },
});
</script>
