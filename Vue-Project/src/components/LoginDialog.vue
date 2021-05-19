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
              <div style="float:right;">{{language.Forgetpassword}}?</div>
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
          <el-button style="width: 100%" type="primary" @click="doLogin">
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
      if (isLogin) {
        document.getElementById('tab-0').click()
      } else {
        document.getElementById('tab-1').click()
      }
    },
    doLogin () {
      console.log('LOGIN')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  margin:30px;
}
</style>
