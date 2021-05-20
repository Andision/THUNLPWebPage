<template>
  <el-dialog :visible.sync="visible" width="500px">
    <el-row class="title"> {{language.PasswordAssistance}} </el-row>
    <el-row class="detail"> <div style="word-wrap:break-all;">{{language.forget_hint}} </div></el-row>
    <el-row class="input">
      <el-input
        v-model="user.username"
        :placeholder="language.Username+' '+language.or+' '+language.Email"
        prefix-icon="el-icon-user"
        size="large"
      ></el-input>
    </el-row>
    <el-row class="input" style="vertical-align: bottom;">
      <el-button style="width: 100%" type="primary" @click="doLogin">
        {{language.Continue}}
      </el-button>
    </el-row>
  </el-dialog>
</template>
<!-- <LoginDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></LoginDoalog> -->
<!-- import LoginDoalog from '@/components/LoginDialog.vue' -->
<script>
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
      visible: this.v,
      user: {
        email: ''
      }
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
  },
  methods: {
    doLogin () {
      console.log('LOGIN')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-weight: bolder;
  font-size: large;
  margin-bottom: 20px;
}
.detail{
  font-weight: normal;
  margin: 35px;
  word-wrap:break-word;
}
.input{
  margin:30px;
}
</style>
