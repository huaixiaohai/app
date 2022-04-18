<template>
<div >
  <!-- <ul id="main">
    <li><router-link  to="/" >商品</router-link></li>
    <li><router-link  to="/about">评价</router-link></li>
  </ul> -->
  <router-view />
</div>
</template>

<script>

export default {
  name: "App",
}
</script>

<style>
/* html{   
    width: 100%;   
    height: 100%;   
    overflow: hidden;   
    font-style: sans-serif;   
}   
body{   
    width: 100%;   
    height: 100%;   
    font-family: 'Open Sans',sans-serif;   
    margin: 0;   
    background-color: #4A374A;   
}  */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
