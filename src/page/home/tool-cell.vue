<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <el-image style="" :src="url" :fit="cover" />
    <h1 class="name">计算器</h1>
    <p class="desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
  </el-card>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.el-card {
  width: 100%;
  min-width: 150px;
  height: 300px;
  border: 0px;
}
.el-image {
  display: block;
  width: 100px;
  height: 100px;
  margin: auto;
}
.name {
  text-align: center;
  margin-top: 10px;
}
.desc {
  text-align: center;
  margin-top: 10px;
}
</style>
