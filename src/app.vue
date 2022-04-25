<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row class="row-bg" justify="space-evenly">
          <el-col :span="6">
            <router-link to="/">
              <h1>在线工具</h1>
            </router-link>
          </el-col>
          <el-col :span="6">
          </el-col>
          <el-col :span="6">
            <el-input v-model="input1" class="w-50 m-2" placeholder="Please Input" :suffix-icon="Search" />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>

</template>

<script lang="ts">
// @Options({
//   components: {

//   },
// })
// export default class App extends Vue {
//   activeIndex: true = true;
//   handleSelect: true= true;
// }
export default {};
</script>

<style scoped>
.el-header {
  /* background: #ecebeb; */
  box-shadow: 0px 0px 5px #e5e4e4;
  height: 100px;
}
.el-row {
  margin-top: 30px;
  margin-bottom: 30px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.main {
  width: 80%;
  margin: auto;
}
</style>

