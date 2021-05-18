<template>
  <el-dialog :visible.sync="visible" width="500px">
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane label="Login">
        <el-row class="input"> WELCOME TO JOIN US </el-row>

        <el-row class="input">
          <el-input
            v-model="user.username"
            placeholder="USERNAME"
            prefix-icon="el-icon-user"
            size="large"
          ></el-input>
        </el-row>

        <el-row class="input">
          <el-input
            type="password"
            v-model="user.password"
            @keydown.enter.native="doLogin"
            placeholder="PASSWORD"
            prefix-icon="el-icon-lock"
            size="large"
          ></el-input>
        </el-row>
        <el-row class="input">
          <el-row>
            <el-col :span="12">
              <el-checkbox v-model="user.remeber" style="float:left;">REMEBER ME</el-checkbox>
            </el-col>
            <el-col :span="12">
              <div style="float:right;">FORGET</div>
            </el-col>
          </el-row>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <el-button style="width: 100%" type="primary" @click="doLogin">
            LOGIN
          </el-button>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <div>
            NOT A MEMBER? SIGNUP
          </div>
        </el-row>
      </el-tab-pane>
      <!-- --------------------------------- -->
      <el-tab-pane label="Sign Up">
        <el-row class="input"> WELCOME TO JOIN US </el-row>

        <el-row class="input">
          <el-input
            v-model="user.username"
            placeholder="USERNAME"
            prefix-icon="el-icon-user"
            size="large"
          ></el-input>
        </el-row>

        <el-row class="input">
          <el-input
            v-model="user.email"
            placeholder="EMAIL"
            prefix-icon="el-icon-message"
            size="large"
          ></el-input>
        </el-row>

        <el-row class="input">
          <el-input
            type="password"
            v-model="user.password"
            @keydown.enter.native="doLogin"
            placeholder="PASSWORD"
            prefix-icon="el-icon-lock"
            size="large"
          ></el-input>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <el-button style="width: 100%" type="primary" @click="doLogin">
            SIGNUP
          </el-button>
        </el-row>
        <el-row class="input" style="vertical-align: bottom;">
          <div>
            ALREADY HAVE AN ACCOUNT? LOGIN
          </div>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<!-- <LoginDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></LoginDoalog> -->
<!-- import LoginDoalog from '@/components/LoginDialog.vue' -->
<script>
export default {
  data () {
    return {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  margin:30px;
}
</style>
