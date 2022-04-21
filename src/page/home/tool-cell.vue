<template>
  <div class="tool-cell">
    <router-link>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {
  onclick() {
    console.log("按钮点击");
  }
}
</script>

<style scoped>
.tool-cell {
  max-height: 100px;
  max-width: 200px;
}
</style>
