<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="nav-menu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">全部</el-menu-item>
            <el-menu-item index="3">开发</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
          <router-view />  
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  components: {

  },
})
export default class App extends Vue {}
</script>

<style>
  .el-header {
    background: rgb(77, 77, 77);
  }
  .nav-menu{
    height: 70%;
    width: 70%;
    margin: auto;
    z-index: auto;
    position: static;
    top: auto;
  }

</style>
