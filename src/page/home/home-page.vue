<template>
  <h1> 在线工具 </h1>  
  <div class="tool-cell-list">
    <tool-cell></tool-cell>
    <tool-cell></tool-cell>
    <tool-cell></tool-cell>
    <tool-cell></tool-cell>
    <tool-cell></tool-cell>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToolCell from './tool-cell.vue'

@Options({
  components: {
      ToolCell
  },
})
export default class App extends Vue {}
</script>

<style scoped>
  .tool-cell-list{
    display: grid;
  }
  .tool-cell {
     max-height: 100px;
     max-width: 200px; 
  }

  .el-row {
    margin-bottom: 20px;
  }
  
  .el-card {
    min-width: 100%;
    height: 100%; 
    margin-right: 20px;
    transition: all .5s;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>