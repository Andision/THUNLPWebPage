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

          <el-menu-item class="menu-item" index="7" style="float: right;">{{
            language.User
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="6" style="float: right;">{{
            language.Download
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="5" style="float: right;">{{
            language.Submit
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="4" style="float: right;">{{
            language.Paper
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="3" style="float: right;">{{
            language.FAQ
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="2" style="float: right;">{{
            language.Leaderboard
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="1" style="float: right;">{{
            language.Tasks
          }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main" style="padding: 0;"><router-view /></el-main>
      <el-footer class="footer" style="padding: 0;">
        <div class="footer-div">
          <el-row>
            <el-col :span="4">
              <div
                class="grid-content bg-purple"
                style="text-align: center; padding: 20px"
              >
                <img src="./assets/logo.png" style="height: 100px" />
              </div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div
                class="grid-content bg-purple"
                style="text-align: center; padding: 20px"
              >
                Welcome to contact us.
              </div>
            </el-col>
            <el-col :span="8" :offset="10">
              <div>
                <el-row>
                  <el-col :span="8">
                    <div
                      style="text-align: center; padding: 20px"
                    >
                      LINK
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div
                      style="text-align: center; padding: 20px"
                    >
                      FEEDBACK
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div
                      style="text-align: center; padding: 20px"
                    >
                      HELP
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
    <LoginDialog v-bind:v="dialogLoginVisible" v-on:close="handleLoginStatus"></LoginDialog>
  </div>
</template>

<script>
import en from '@/components/en.json'
import LoginDialog from '@/components/LoginDialog.vue'
export default {
  name: 'App',
  data () {
    return {
      language: en,
      dialogLoginVisible: false,
      token: ''
    }
  },
  methods: {
    checkLogin () {
      console.log('HH')
      var cookieOri = document.cookie
      var cookie = ''
      if (cookieOri !== '') {
        cookie = JSON.parse(document.cookie)
      }
      console.log('cookie:', cookie)
      if (cookieOri === '' || cookie.token === '') {
        this.handleLoginStatus(true)
      } else {
        this.token = cookie.token
        this.$router.push({path: '/user'})
      }
    },
    handleMenuSelect (key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case '1':
          this.$router.push({path: '/'})
          break
        case '2':
          this.$router.push({path: '/leaderboard'})
          break
        case '3':
          this.$router.push({path: '/faq'})
          break
        case '4-1':
          this.$router.push({path: '/submit/attack'})
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
          this.checkLogin()
          break
      }
    },
    handleGoHomePage () {
      this.$router.push({path: '/'})
    },
    handleLoginStatus (isLocal) {
      if (isLocal) {
        this.dialogLoginVisible = true
      } else {
        this.dialogLoginVisible = false
      }
      console.log(this.dialogLoginVisible)
    }
  },
  components: { LoginDialog }
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
  height: 150px;
  background-color: black;
  color: white;
}

.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
}
</style>
