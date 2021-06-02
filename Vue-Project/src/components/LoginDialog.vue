<template>
  <el-dialog :visible.sync="visible" width="500px">
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane :label="language.Login" ref="tab_login">
        <el-row class="input"> {{language.WelcomeToJoinUs}} </el-row>

        <el-row class="input">
          <el-input
            v-model="user.username"
            :placeholder="language.Username"
            prefix-icon="el-icon-user"
            size="large"
          ></el-input>
        </el-row>

        <el-row class="input">
          <el-input
            type="password"
            v-model="user.password"
            @keydown.enter.native="doLogin"
            :placeholder="language.Password"
            prefix-icon="el-icon-lock"
            size="large"
          ></el-input>
        </el-row>
        <el-row class="input">
          <el-row>
            <el-col :span="12">
              <el-checkbox v-model="user.remeber" style="float:left;">{{language.Remeberme}}</el-checkbox>
            </el-col>
            <el-col :span="12">
              <!-- <div style="float:right;">{{language.Forgetpassword}}?</div> -->
              <el-button type="text" @click="handleClickLink('forget')">{{language.Forgetpassword}}?</el-button>
            </el-col>
          </el-row>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <el-button style="width: 100%" type="primary" @click="doLogin">
            {{language.Login}}
          </el-button>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <div>
            {{language.Notamember}}? <el-button type="text" @click="handleClickLink(false)">{{language.SignUp}}</el-button>
          </div>
        </el-row>
      </el-tab-pane>
      <!-- --------------------------------- -->
      <el-tab-pane label="Sign Up">
        <el-row class="input"> {{language.WelcomeToJoinUs}} </el-row>

        <el-row class="input">
          <el-input
            v-model="user.username"
            :placeholder="language.Username"
            prefix-icon="el-icon-user"
            size="large"
          ></el-input>
        </el-row>

        <el-row class="input">
          <el-input
            v-model="user.email"
            :placeholder="language.Email"
            prefix-icon="el-icon-message"
            size="large"
          ></el-input>
        </el-row>

        <el-row class="input">
          <el-input
            type="password"
            v-model="user.password"
            @keydown.enter.native="doLogin"
            :placeholder="language.Password"
            prefix-icon="el-icon-lock"
            size="large"
          ></el-input>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <el-button style="width: 100%" type="primary" @click="doSignup">
            {{language.SignUp}}
          </el-button>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <div>
            {{language.Alreadyhaveanaccount}}? <el-button type="text" @click="handleClickLink(true)">{{language.Login}}</el-button>
          </div>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<!-- <LoginDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></LoginDoalog> -->
<!-- import LoginDoalog from '@/components/LoginDialog.vue' -->
<script>
import en from '@/components/en.json'
import config from '@/components/config.json'
export default {
  data () {
    return {
      language: en,
      visible: this.v,
      user: {
        username: '',
        password: '',
        remeber: false,
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
    handleClickLink (isLogin) {
      if (isLogin === true) {
        document.getElementById('tab-0').click()
      } else if (isLogin === false) {
        document.getElementById('tab-1').click()
      } else {
        this.$emit('close', 'forget')
      }
    },
    doLogin () {
      console.log('LOGIN')
      let formData = new FormData()
      formData.append('nickname', this.user.username)
      formData.append('password', this.user.password)
      this.$axios.post(config.API + config.toLogin, formData).then(res => {
        console.log('LOGIN RES', res, res.status)
        if (res.status === 200) {
          console.log('LOGIN666', res.data)
          if (res.data.re_code === '0') {
            document.cookie = JSON.stringify({token: res.data.token})
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            this.$emit('close', false)
            location.reload()
          } else if (res.data.re_code === '4002') {
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
          } else if (res.data.re_code === '4106') {
            this.user.password = ''
            this.$message({
              message: res.data.msg,
              type: 'error'
            })
          } else if (res.data.re_code === '4103') {
            this.$message({
              message: '请填写用户名或密码',
              type: 'warning'
            })
          } else {
            this.$message({
              message: '网络故障，请稍后再试。',
              type: 'warning'
            })
          }
        }
      }).catch(error => {
        console.log(error)
      })
    },
    doSignup () {
      console.log('SIGN')
      let formData = new FormData()
      formData.append('nickname', this.user.username)
      formData.append('password', this.user.password)
      formData.append('email', this.user.email)
      this.$axios.post(config.API + config.toSignup, formData).then(res => {
        console.log('SIGN RES', res, res.status)
        if (res.status === 200) {
          if (res.data.re_code === '0') {
            this.$message({
              message: '注册成功',
              type: 'success'
            })
            this.$emit('close', false)
          } else if (res.data.re_code === '4003') {
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
            this.user.password = ''
          } else if (res.data.re_code === '4103') {
            this.$message({
              message: '请填写所有信息',
              type: 'warning'
            })
          } else {
            this.$message({
              message: '网络故障，请稍后再试。',
              type: 'warning'
            })
          }
        }
      }).catch(error => {
        console.log(error)
      })
    }
    // handleLogin (isLocal) {
    //   if (isLocal) {
    //     this.dialogLoginVisible = true
    //   } else {
    //     this.dialogLoginVisible = false
    //   }
    //   console.log(this.dialogLoginVisible)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  margin:30px;
}
</style>
