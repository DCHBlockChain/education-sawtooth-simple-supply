<template>

  <div id="app" class='container' style="
      display: flex;
      min-height: 130vh;
      flex-direction: column;">
    <el-container style="width: 100%; height: auto;">
      <el-header> <nav-bar></nav-bar></el-header>
      <el-main style="min-height: 400px;">  <router-view></router-view></el-main>
      <el-footer style="font-size: 13px; text-align: center; flex: 1;">Copyright © 2018. All rights reserved. DCH</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
  	NavBar
  },
  data () {
    return {
    }
  },
  computed: {
    path () {
      return this.$route.path;
    }
  },
  methods: {

  }
}
</script>

<style>
  .el-header {
    padding: 0;
    position:fixed;
    left:0;           /* top left corner should start at leftmost spot */
    top:0;            /* top left corner should start at topmost spot */
    width:100vw;      /* take up the full browser width */
    z-index:200;  /* high z index so other content scrolls underneath */
    height:100px;
  }
  .el-main {
    margin-top: 20px;
  }
</style>
