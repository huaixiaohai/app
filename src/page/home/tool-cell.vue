<template>
<router-link to='/calculator'>
<!-- <el-button type="text" class="button" @click="onclick"> -->
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img src="@/assets/calculator.png" class="image">
        <div style="padding: 14px;">
            <span>Calculator</span>
            <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
            </div>
        </div>
    </el-card>
<!-- </el-button> -->
</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  components: {

  },
})
export default class App extends Vue {
    onclick() {
        console.log("按钮点击")
    }
}
</script>

<style scoped>
.el-card {
/* min-width: 380px; */
margin-right: 20px;
transition: all .3s;
display: flex;
height: 100%;
}
.el-card:hover{
margin-top: -5px;
}
.el-card img {
    width: 100%;
}
</style>
