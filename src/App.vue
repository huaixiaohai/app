<template>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
         <hello-world />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
<!-- <div id="app" class="w-100">
          <div class="col-12">
            <vue-advanced-calculator />
          </div>
        </div> -->
        <!-- <div>
        <LoginPage />
        </div> -->
       
</template>

<script>
  // import {VueAdvancedCalculator} from 'vue-advanced-calculator'
  // import 'vue-advanced-calculator/dist/vue-advanced-calculator.min.css'
  // import {HelloWorld} from '@/components/hello-world.vue'
  // import {LoginPage} from '@/page/login/login-page.vue'
import HelloWorld from '@/components/hello-world.vue'

  export default {

    name: "App",
    //component code
    components: {
      // HelloWorld,
      // LoginPage
        HelloWorld
    }
  }
</script>

<style>
html{   
    width: 100%;   
    height: 100%;   
    overflow: hidden;   
    font-style: sans-serif;   
}
/* body{   
    width: 100%;   
    height: 100%;   
    font-family: 'Open Sans',sans-serif;   
    margin: 0;   
    background-color: #4A374A;   
}  */

.el-container{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
      /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
}

.el-header, .el-footer {
    
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
    
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.hello-world {
  height: 10%;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
