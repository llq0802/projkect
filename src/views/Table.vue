<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="column in tableColumn"
      :key="column.prop"
      v-bind="column"
    >
      <template #default="scope">
        <span v-if="column.render">
          {{ column.render(scope.row, scope.row[column.prop]) }}
        </span>
        <span v-else>{{ scope.row[column.prop] }}</span>
      </template>
    </el-table-column>

    <!-- 操作 -->
    <el-table-column
      v-if="tableOption && tableOption.label"
      :label="tableOption.label"
      align="center"
      class-name="small-padding fixed-width"
    >
      <template #default="scope">
        <el-button
          v-for="(item, index) in tableOption.options"
          :key="index"
          :type="item.type"
          :icon="item.icon"
          @click="handleButton(item.methods, scope.row, scope.$index)"
          size="mini"
        >
          {{ item.label }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 翻页 -->
  <el-pagination
    v-if="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    v-model:currentPage="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    background
    prev-text="上一页"
    next-text="下一页"
  />
</template>

<script lang="ts" >
import { defineComponent, reactive } from "vue";

export default defineComponent({
  methods: {
    // 切换当前一页展示多少条
    handleSizeChange(val: any) {
      this.$emit("sizeChange", val);
    },
    // 翻页
    handleCurrentChange(val: any) {
      this.$emit("pageChange", val);
    },
    // 按钮点击事件
    // methods方法名 row当前点击列数据 index当前点击的index
    handleButton(methods: any, row: any, index: any) {
      this.$emit("clickButton", { methods: methods, row: row, index: index });
    },
    // 点击排序
    handleSortChange(val: any) {
      this.$emit("sortChange", val);
    },
  },
  setup() {
    //表格数据
    const tableData = reactive([
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

    // 表格列配置
    const tableColumn = reactive([
      {
        prop: "date",
        label: "时间",
        width: 220,
      },
      {
        prop: "name",
        label: "姓名",
        width: 100,
      },
      {
        prop: "address",
        label: "地址",
      },
    ]);

    // 表格操作列配置
    const tableOption = {
      label: "操作",
      options: [
        {
          label: "删除",
          type: "danger",
          icon: "el-icon-delete",
          methods: "del",
        },
      ],
    };

    const currentPage = 1;
    const pageSize = 10;
    const total = tableData.length || 0;

    return {
      tableData,
      tableColumn,
      tableOption,
      currentPage,
      pageSize,
      total,
    };
  },
});
</script>

<style>
</style>