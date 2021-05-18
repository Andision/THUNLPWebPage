<template>
  <el-dialog :visible.sync="visible" width="500px">
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane label="Login">LOGIN</el-tab-pane>
      <el-tab-pane label="Sign Up">SIGNUP</el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<!-- <LoginDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></LoginDoalog> -->
<!-- import LoginDoalog from '@/components/LoginDialog.vue' -->
<script>
export default {
  data () {
    return {
      visible: this.v
    }
  },
  props: {
    v: Boolean
  },
  watch: {
    v (curVal, oldVal) {
      this.visible = curVal
    },
    visible (curVal, oldVal) {
      if (!curVal) {
        this.$emit('close', false)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
