<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div id="app">
    <el-container class="container" style="padding: 0">
      <el-header class="header" style="padding: 0">
        <el-menu
          class="el-menu"
          mode="horizontal"
          @select="handleMenuSelect"
          background-color="#64438D"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF"
          id="bar"
        >
          <!-- <div
            style="float: left; margin-top:10px; margin-left: 20px; padding: 5px; color: white; font-size: larger; cursor: pointer;"
          >
            <a href="http://baai.ac.cn">
              <img src="https://z3.ax1x.com/2021/09/07/ho7fHA.jpg" style="height: 30px;">
            </a>
          </div> -->
          <div
            style="
              float: left;
              margin-top: 10px;
              margin-left: 50px;
              padding: 5px;
              color: white;
              font-size: larger;
              cursor: pointer;
            "
            @click="handleGoHomePage"
          >
            <!-- {{language.wyzs}} -->
            <span>智源指数 </span>
            <div style="font-size: 26px; margin-top:50px;display:inline;">CUGE</div>
          </div>

          <el-menu-item
            v-show="isLogin"
            class="menu-item"
            index="8"
            style="float: right"
            >{{ language.app_Logout }}</el-menu-item
          >
          <el-submenu index="9" class="menu-item" style="float: right">
            <template slot="title">Language</template>
            <el-menu-item index="9-1" class="menu-item">简体中文</el-menu-item>
            <el-menu-item index="9-2" class="menu-item">English</el-menu-item>
          </el-submenu>
          <el-menu-item class="menu-item" index="7" style="float: right">
            {{ isLogin ? language.app_User : language.Login }}
          </el-menu-item>
          <el-menu-item class="menu-item" index="10" style="float: right">{{
            language.app_About
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="6" style="float: right">{{
            language.app_Download
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="5" style="float: right">{{
            language.app_Submit
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="4" style="float: right">{{
            language.app_Paper
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="3" style="float: right">{{
            language.app_FAQ
          }}</el-menu-item>
          <el-submenu index="10" class="menu-item" style="float: right">
            <template slot="title">单数据集榜</template>
            <el-submenu
              :index="'10-' + index"
              v-for="(abi, index) in alltask"
              :key="index"
            >
              <template slot="title">{{ abi.zh }}</template>
              <el-menu-item
                :index="
                  'A-10-' +
                  index +
                  '-' +
                  index1 +
                  '-' +
                  task.id +
                  '-@' +
                  task.name
                "
                v-for="(task, index1) in abi.task"
                :key="abi + index1"
                >{{ task.name }}</el-menu-item
              >
            </el-submenu>
          </el-submenu>
          <el-menu-item class="menu-item" index="2" style="float: right">{{
            language.app_Leaderboard
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="1" style="float: right">{{
            language.app_Tasks
          }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main" style="padding: 0"
        ><router-view :language="language" v-if="isFresh" :isLogin="isLogin" :app="this"
      /></el-main>
      <el-footer class="footer" style="padding: 0">
        <div class="footer-div">
          <el-row>
            <el-col :span="12">
              <a href="https://clustrmaps.com/site/1bk2u" title="Visit tracker"
                ><img
                  src="//www.clustrmaps.com/map_v2.png?d=sRtvKqoXFHRrS9V6nm3IDtLYieMCka7pZnXkwO6ZWyQ&cl=ffffff"
              /></a>
            </el-col>
            <el-col :span="12" style="padding-top: 30px">
              <a
                href="https://github.com/TsinghuaAI/CUGE"
                style="font-size: xx-large; text-decoration: none; color: white"
                >联系我们</a
              >
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
    <LoginDialog
      v-bind:v="dialogLoginVisible"
      v-on:close="handleLoginStatus"
      :language="language"
    ></LoginDialog>
    <ForgetDialog
      v-bind:v="dialogForgetVisible"
      v-on:close="handleForgetStatus"
      :language="language"
    ></ForgetDialog>
  </div>
</template>

<script>
import en from '@/components/english.json'
import zh from '@/components/chinese.json'
import LoginDialog from '@/components/LoginDialog.vue'
import ForgetDialog from '@/components/ForgetDialog.vue'
import config from '@/components/config.json'
import task from '@/components/task.json'
export default {
  name: 'App',
  data () {
    return {
      language: zh,
      dialogLoginVisible: false,
      dialogForgetVisible: false,
      token: '',
      isLogin: false,
      isFresh: true,
      alltask: task.all
    }
  },
  mounted: function () {
    console.log(task)
    this.checkLogin()
    if (sessionStorage.getItem('language') === 'zh') {
      this.language = zh
    } else if (sessionStorage.getItem('language') === 'en') {
      this.language = en
    } else {
      sessionStorage.setItem('language', 'zh')
    }
  },
  methods: {
    checkLogin () {
      var cookieOri = document.cookie
      var cookie = ''
      if (cookieOri !== '') {
        cookie = JSON.parse(document.cookie)
      }
      console.log('cookie:', cookieOri, typeof cookieOri)
      if (cookieOri == null || cookieOri === '' || cookieOri === 'null') {
        // this.handleLoginStatus(true)
        console.log('Check Login in App False1')
        this.isLogin = false
      } else if (cookie.token === '' || cookie.token === null) {
        console.log('Check Login in App False2')
        this.isLogin = false
      } else if (cookie.extime > Date.parse(new Date()).toString()) {
        console.log('Check Login in App True')
        this.isLogin = true
      } else {
        console.log('Check Login in App OTHER')
        this.isLogin = false
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
        this.$router.push({ path: '/user' })
      } else {
        this.handleLoginStatus(true)
      }
    },
    toLogout () {
      let formData = new FormData()
      this.$axios.get(config.API + config.toLogout, formData).then((res) => {
        if (res.status === 200) {
          if (res.data.re_code === '0') {
            this.isLogin = false
            document.cookie = 'null'
            console.log('In toLogout in App', document.cookie)
            this.$message({
              message: '登出成功',
              type: 'success'
            })
            this.$router.push({ path: '/' })
            // location.reload()
          }
        }
      })
    },
    handleMenuSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key[0] === 'A') {
        var tid = key.split('-')[4]
        var tname = key.split('@')[1]
        console.log('handleSingle', tid, tname)
        // window.open('/#/taskboard?id=' + tid + '&name=' + tname, '_self')
        location.href = '/#/taskboard?id=' + tid + '&name=' + tname
        location.reload()
      } else {
        switch (key) {
          case '1':
            this.$router.push({ path: '/task' })
            break
          case '2':
            this.$router.push({ path: '/leaderboard' })
            break
          case '3':
            this.$router.push({ path: '/faq' })
            break
          case '4':
            // this.$router.push({path: 'http://www.baidu.com'})
            window.open('/api/get_paper')
            break
          case '5':
            this.$router.push({ path: '/submit' })
            break
          case '6':
            this.$router.push({ path: '/download' })
            break
          case '6-2':
            this.$router.push({ path: '/judging' })
            break
          case '7':
            // this.$router.push({path: '/user'})
            this.toLogin()
            break
          case '8':
            // this.$router.push({path: '/user'})
            this.toLogout()
            break
          case '9-1':
            // this.$router.push({path: '/user'})
            this.language = zh
            sessionStorage.setItem('language', 'zh')
            this.handleReload()
            break
          case '9-2':
            // this.$router.push({path: '/user'})
            this.language = en
            sessionStorage.setItem('language', 'en')
            this.handleReload()
            break
          case '10':
            this.$router.push({ path: '/about' })
            break
        }
      }
    },
    handleReload () {
      this.isFresh = false
      this.$nextTick(function () {
        this.isFresh = true
      })
    },
    handleGoHomePage () {
      this.$router.push({ path: '/' })
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
  font-family: "PingFang SC","Microsoft YaHei", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
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
  font-size: 20px;
}
.el-menu .menu-item {
  color: white;
  font-size: 20px;
}

.el-menu .el-submenu__title {
  color: white;
  font-size: 20px;
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
  padding-top: 50px;
}

.el-menu--horizontal .el-menu-item.is-active {
  border-bottom: none;
}
</style>
<style>
.el-menu-item {
  font-size: 20px;
  font-family: "PingFang SC","Microsoft YaHei", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}

.clustrMapsLink {
  margin-top: -20px;
}
</style>
