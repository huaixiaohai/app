<template>
  <div class="app-head">
    <el-button type="text">在线工具</el-button>
    <ul>
      <el-button  type="text">登录</el-button>
      <el-button  type="text">开放注册</el-button>
    </ul>
  </div>
  <div class="app-main">
    <div>
      <router-view></router-view>
    </div>
  </div>
  <div class="app-tail">
    <p>//TODO首页</p>
    <p>//TODOCopyright © 2011-2022 iteam. Current version is 2.88.1. UTC+08:00, 2022-04-21 18:50</p>
    <p>//TODO浙ICP备14020137号-1 $访客地图$</p>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';


// @Options({
//   components: {

//   },
// })
// export default class App extends Vue {
//   activeIndex: true = true;
//   handleSelect: true= true;
// }
export default {}

</script>

<style scoped>
  .app-head{
    height: 30px;
    background: rgb(73, 73, 73);
  }
  .app-head ul {
    float: right;
  }
  .el-button {
    position: relative;
    display: inline-block;
    padding: 0 12px;
    height: 29px;
    /* line-height: 20px; */
    color: #ccc;
    text-decoration: none; 
  }
  .app-main{
    min-height: 500px;
    
  }
  .app-main div{
    margin: auto;
    width: 70%; 
  }
  .app-tail{
    text-align: center;
  }
</style>

