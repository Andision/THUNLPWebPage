<template>
  <el-dialog :visible.sync="visible" width="500px">
    <div v-if="showHint == false">
      <el-row class="title"> {{language.PasswordAssistance}} </el-row>
      <el-row class="detail"> <div style="word-wrap:break-all;">{{language.forget_hint}} </div></el-row>
      <el-row class="input">
        <el-input
          v-model="user.email"
          :placeholder="language.Email"
          prefix-icon="el-icon-user"
          size="large"
        ></el-input>
      </el-row>
      <el-row class="input" style="vertical-align: bottom;">
        <el-button style="width: 100%" type="primary" @click="doLogin">
          {{language.Continue}}
        </el-button>
      </el-row>
    </div>
    <div v-if="showHint == true">
      {{resHint}}
    </div>
  </el-dialog>
</template>
<!-- <LoginDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></LoginDoalog> -->
<!-- import LoginDoalog from '@/components/LoginDialog.vue' -->
<script>
import config from '@/components/config.json'
export default {
  data () {
    return {
      visible: this.v,
      showHint: false,
      resHint: '',
      user: {
        email: ''
      }
    }
  },
  props: {
    v: Boolean,
    language: Object
  },
  watch: {
    v (curVal, oldVal) {
      this.visible = curVal
    },
    visible (curVal, oldVal) {
      if (!curVal) {
        this.showHint = false
        this.resHint = ''
        this.user.email = ''
        this.$emit('close', false)
      }
    }
  },
  methods: {
    doLogin () {
      let formData = new FormData()
      formData.append('email', this.user.email)
      this.$axios.post(config.API + config.toForget, formData).then((res) => {
        if (config.debug === 'true') {
          console.log(res)
        }
        if (res.status === 200) {
          this.showHint = true
          this.resHint = res.data.msg
        }
      })
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
