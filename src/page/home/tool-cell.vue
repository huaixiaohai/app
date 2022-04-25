<template>

  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <router-link to="/calculator">
      <el-image style="" :src=toolCellData.icon :fit="cover" />
      <h1 class="name">{{toolCellData.name}}</h1>
      <p class="desc">{{toolCellData.desc}}</p>
    </router-link>
  </el-card>

</template>

<script lang="ts">
export default {
  name: "tool-cell",
  props: {
    toolCellData: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  setup(props: any) {
    console.log(props.toolCellData.id);
  },
};
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
