<template>
  <div class="tool-cell-list">
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
    <tool-cell v-for="toolCellData in toolCellDataList" :key="toolCellData.id" :toolCellData="toolCellData"></tool-cell>
  </div>
</template>

<script lang="ts">
import ToolCell from "./tool-cell.vue";
export default {
  name: "home-page",

  components: {
    ToolCell,
  },

  data() {
    return {
      toolCellDataList: [
        {
          id: 0,
          name: "计算器",
          desc: "常规加，减，乘，除等计算",
          icon: require("@/assets/calcultor.png"),
        },
      ],
    };
  },

  // async created: function () {
  //   const res = await ToolList({})

  // },
};
</script>

<style scoped>
.tool-cell-list {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-items: center;
  /* justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。 */
  justify-content: center;
  /* align-content: center; */
}
</style>