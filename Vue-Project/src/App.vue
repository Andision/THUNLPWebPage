<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div id="app">
    <el-container class="container" style="padding: 0;">
      <el-header class="header" style="padding: 0;">
        <el-menu
          class="el-menu"
          mode="horizontal"
          @select="handleMenuSelect"
          background-color="#64438D"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF"
        >
          <div
            style="float: left; margin-top:10px; margin-left: 50px; padding: 5px; color: white; font-size: larger; cursor: pointer;"
            @click="handleGoHomePage"
          >
            {{language.wyzs}}
          </div>

          <el-menu-item v-show="isLogin" class="menu-item" index="8" style="float: right;">{{
            language.app_Logout
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="7" style="float: right;">{{
            language.app_User
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="6" style="float: right;">{{
            language.app_Download
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="5" style="float: right;">{{
            language.app_Submit
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="4" style="float: right;">{{
            language.app_Paper
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="3" style="float: right;">{{
            language.app_FAQ
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="2" style="float: right;">{{
            language.app_Leaderboard
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="1" style="float: right;">{{
            language.app_Tasks
          }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main" style="padding: 0;"><router-view /></el-main>
      <el-footer class="footer" style="padding: 0;">
        <div class="footer-div">
          <!-- <el-row>
            <el-col :span="6"><div>LOGO</div></el-col>
            <el-col :span="6" style="text-align: left;">
              <div>联系我们</div>
              <div>123@tsinghua.edu.cn</div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-row>
                  <el-col :span="5" :offset="9"><div>链接</div></el-col>
                  <el-col :span="5"><div>反馈</div></el-col>
                  <el-col :span="5"><div>帮助</div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row> -->
        </div>
      </el-footer>
    </el-container>
    <LoginDialog v-bind:v="dialogLoginVisible" v-on:close="handleLoginStatus"></LoginDialog>
    <ForgetDialog v-bind:v="dialogForgetVisible" v-on:close="handleForgetStatus"></ForgetDialog>
  </div>
</template>

<script>
import en from '@/components/en.json'
import LoginDialog from '@/components/LoginDialog.vue'
import ForgetDialog from '@/components/ForgetDialog.vue'
import config from '@/components/config.json'
export default {
  name: 'App',
  data () {
    return {
      language: en,
      dialogLoginVisible: false,
      dialogForgetVisible: false,
      token: '',
      isLogin: false
    }
  },
  mounted: function () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      var cookieOri = document.cookie
      var cookie = ''
      if (cookieOri !== '') {
        cookie = JSON.parse(document.cookie)
      }
      console.log('cookie:', cookieOri)
      if (cookieOri === '' || cookie.token === '') {
        // this.handleLoginStatus(true)
        this.isLogin = false
      } else if (cookie.extime > Date.parse(new Date()).toString()) {
        console.log('Check Login in App True')
        this.isLogin = true
      }
      // else {
      //   this.isLogin = true
      //   this.token = cookie.token
      //   // this.token = cookie.token
      //   // this.$router.push({path: '/user'})
      // }
    },
    toLogin () {
      this.checkLogin()
      if (this.isLogin) {
        this.$router.push({path: '/user'})
      } else {
        this.handleLoginStatus(true)
      }
    },
    toLogout () {
      let formData = new FormData()
      this.$axios.get(config.API + config.toLogout, formData).then(res => {
        if (res.status === 200) {
          if (res.data.re_code === '0') {
            this.isLogin = false
            document.cookie = ''
            this.$message({
              message: '登出成功',
              type: 'success'
            })
            // location.reload()
          }
        }
      })
    },
    handleMenuSelect (key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case '1':
          this.$router.push({path: '/task'})
          break
        case '2':
          this.$router.push({path: '/leaderboard'})
          break
        case '3':
          this.$router.push({path: '/faq'})
          break
        case '4':
          // this.$router.push({path: 'http://www.baidu.com'})
          window.open('/api/get_paper')
          break
        case '5':
          this.$router.push({path: '/submit'})
          break
        case '6':
          this.$router.push({path: '/download'})
          break
        case '6-2':
          this.$router.push({path: '/judging'})
          break
        case '7':
          // this.$router.push({path: '/user'})
          this.toLogin()
          break
        case '8':
          // this.$router.push({path: '/user'})
          this.toLogout()
          break
      }
    },
    handleGoHomePage () {
      this.$router.push({path: '/'})
    },
    handleLoginStatus (isLocal) {
      if (isLocal === true) {
        this.dialogLoginVisible = true
      } else if (isLocal === false) {
        this.dialogLoginVisible = false
      } else {
        this.dialogLoginVisible = false
        this.handleForgetStatus(true)
      }
      console.log(this.dialogLoginVisible)
    },
    handleForgetStatus (isLocal) {
      if (isLocal) {
        this.dialogForgetVisible = true
      } else {
        this.dialogForgetVisible = false
      }
      console.log(this.dialogForgetVisible)
    }
  },
  components: { LoginDialog, ForgetDialog }
}
</script>

<style>
#app {
  font-family: -apple-system,BlinkMacSystemFont,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  min-width: 1000px;
}

body,
#app {
  min-height: 99%;
  min-width: 99%;
  margin: 0;
}

.el-menu {
  margin: 0;
  width: 100%;
  font-weight: bolder;
}
.menu-item{
  color: white;
}

.header,
.footer {
  width: 100%;
  padding: 0;
}

.container,
.main {
  min-height: 100%;
  padding: 0;
}

.footer-div {
  height: 100px;
  background-color: black;
  color: white;
  padding-top: 60px;
}

.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
}
</style>
