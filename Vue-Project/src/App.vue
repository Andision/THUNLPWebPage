<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div id="app">
    <div style="height: 100px; width: 50px; position: fixed; right: 20px; bottom: 10px;">
      <a-button type="primary" shape="circle" icon="github" style="margin-bottom:10px;" @click="handleContactIcon('github')"/>
      <el-tooltip effect="light" content="cuge_baai@163.com" placement="left">
        <a-button type="primary" shape="circle" icon="mail" @click="handleContactIcon('mail')"/>
      </el-tooltip>
    </div>
    <el-container class="container" style="padding: 0">
      <el-header class="header" style="padding: 0">
        <div>
          <el-row style="background-color: #64438d">
            <el-col :span="4">
              <div
                style="
                  float: left;
                  margin-top: 10px;
                  margin-left: 30px;
                  color: white;
                  font-size: 28px;
                  font-weight: bold;
                  cursor: pointer;
                  background-color: #64438d;
                "
                @click="handleGoHomePage"
              >
                <!-- {{language.wyzs}} -->
                <div style="display: inline-block; height: 100%">
                  {{ language.wyzs }}
                </div>
                <!-- <div style="display:inline-block;height: 100%;line-height: 10px;">CUGE</div> -->
              </div>
            </el-col>
            <el-col :span="18">
              <el-menu
                class="el-menu"
                mode="horizontal"
                @select="handleMenuSelect"
                background-color="#64438D"
                text-color="#FFFFFF"
                active-text-color="#FFFFFF"
                id="bar"
              >
                <el-menu-item
                  v-show="isLogin"
                  class="menu-item"
                  index="8"
                  style="float: right"
                  >{{ language.app_Logout }}</el-menu-item
                >
                <el-menu-item class="menu-item" index="7" style="float: right">
                  {{ isLogin ? language.app_User : language.Login }}
                </el-menu-item>
                <el-menu-item
                  class="menu-item"
                  index="10"
                  style="float: right"
                  >{{ language.app_About }}</el-menu-item
                >
                <!-- <el-menu-item class="menu-item" index="6" style="float: right">{{
                  language.app_Download
                }}</el-menu-item> -->
                <el-menu-item
                  class="menu-item"
                  index="5"
                  style="float: right"
                  >{{ language.app_Submit }}</el-menu-item
                >
                <el-menu-item
                  class="menu-item"
                  index="code"
                  style="float: right"
                  >{{ language.app_code }}</el-menu-item
                >
                <el-menu-item
                  class="menu-item"
                  index="4"
                  style="float: right"
                  >{{ language.app_Paper }}</el-menu-item
                >
                <el-menu-item
                  class="menu-item"
                  index="3"
                  style="float: right"
                  >{{ language.app_FAQ }}</el-menu-item
                >
                <el-submenu index="10" class="menu-item" style="float: right">
                  <template slot="title">{{ language.app_Single }}</template>
                  <el-submenu
                    :index="'10-' + index"
                    v-for="(abi, index) in alltask"
                    :key="index"
                  >
                    <template slot="title"
                      ><span class="ads-font">{{
                        language.language == "zh" ? abi.name_zh : abi.name_en
                      }}</span></template
                    >
                    <el-menu-item
                      :index="
                        'A-10-' +
                        index +
                        '-' +
                        index1 +
                        '-' +
                        task.id +
                        '-@' +
                        task.name_en
                      "
                      v-for="(task, index1) in abi.task"
                      :key="abi + index1"
                      >{{ task.name_en }}</el-menu-item
                    >
                  </el-submenu>
                </el-submenu>
                <el-menu-item
                  class="menu-item"
                  index="2"
                  style="float: right"
                  >{{ language.app_Leaderboard }}</el-menu-item
                >
                <el-menu-item
                  class="menu-item"
                  index="1"
                  style="float: right"
                  >{{ language.app_Tasks }}</el-menu-item
                >
              </el-menu>
            </el-col>
            <el-col :span="2">
              <div
                id="language-switch"
                style="
                  height: 60px;
                  display: flex;
                  display: -webkit-flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <el-switch
                  v-model="languageswitch"
                  active-text="ZH"
                  inactive-text="EN"
                  @change="handleLanguage"
                  active-color="#B38BE4"
                  inactive-color="#B38BE4"
                >
                </el-switch>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main class="main" style="padding: 0"
        ><router-view
          :language="language"
          v-if="isFresh"
          :isLogin="isLogin"
          :app="this"
      /></el-main>
      <el-footer class="footer" style="padding: 0">
        <div class="footer-div">
          <el-row>
            <!-- <el-col :span="12">
              <a href="https://clustrmaps.com/site/1bk2u" title="Visit tracker"
                ><img
                  src="//www.clustrmaps.com/map_v2.png?d=sRtvKqoXFHRrS9V6nm3IDtLYieMCka7pZnXkwO6ZWyQ&cl=ffffff"
              /></a>
            </el-col> -->
            <!-- <el-col :span="24" style="padding-top: 30px">
              <a
                href="https://github.com/TsinghuaAI/CUGE"
                style="
                  font-size: xx-medium;
                  text-decoration: none;
                  color: white;
                "
                >{{ language.app_contactus }}</a
              >
            </el-col> -->
          </el-row>
          <el-row style="padding-top: 50px;">
            <el-col :span="12">
              ©2021 All Rights Reserved
            </el-col>
            <el-col :span="12">
                <a
                  href="https://github.com/TsinghuaAI/CUGE"
                  style="
                    font-size: xx-medium;
                    text-decoration: none;
                    color: white;
                    text-align:right;
                  "
                  >
                  {{ language.app_contactus }}
                  <i class="el-icon-link"></i>
                  </a
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
      alltask: task.all,
      languageswitch: true,
      kb: '　'
    }
  },
  mounted: function () {
    if (config.debug === 'true') {
      console.log(task)
    }

    // this.checkLogin()
    this.checkLoginNew()
    if (localStorage.getItem('language') === 'zh') {
      this.language = zh
      this.languageswitch = true
    } else if (localStorage.getItem('language') === 'en') {
      this.language = en
      this.languageswitch = false
    } else {
      localStorage.setItem('language', 'zh')
      this.languageswitch = true
    }
    this.handleReload()
  },
  methods: {
    checkLoginNew () {
      var cookieToken = sessionStorage.getItem('token')
      if (config.debug === 'true') {
        console.log('checkLoginNew', cookieToken)
      }
      if (cookieToken === null || cookieToken === undefined || cookieToken === '') {
        this.isLogin = false
      } else {
        this.isLogin = true
      }
    },
    // checkLogin () {
    //   var cookieOri = document.cookie
    //   var cookie = ''
    //   if (cookieOri !== '') {
    //     cookie = JSON.parse(document.cookie)
    //   }
    //   if (config.debug === 'true') {
    //     console.log('cookie:', cookieOri, typeof cookieOri)
    //   }
    //   if (cookieOri == null || cookieOri === '' || cookieOri === 'null') {
    //     // this.handleLoginStatus(true)
    //     if (config.debug === 'true') {
    //       console.log('Check Login in App False1')
    //     }
    //     this.isLogin = false
    //   } else if (cookie.token === '' || cookie.token === null) {
    //     if (config.debug === 'true') {
    //       console.log('Check Login in App False2')
    //     }
    //     this.isLogin = false
    //   } else if (cookie.extime > Date.parse(new Date()).toString()) {
    //     if (config.debug === 'true') {
    //       console.log('Check Login in App True')
    //     }
    //     this.isLogin = true
    //   } else {
    //     if (config.debug === 'true') {
    //       console.log('Check Login in App OTHER')
    //     }
    //     this.isLogin = false
    //   }
    //   // else {
    //   //   this.isLogin = true
    //   //   this.token = cookie.token
    //   //   // this.token = cookie.token
    //   //   // this.$router.push({path: '/user'})
    //   // }
    // },
    toLogin () {
      // this.checkLogin(
      this.checkLoginNew()
      if (this.isLogin) {
        this.$router.push({ path: '/user' })
      } else {
        this.handleLoginStatus(true)
      }
    },
    toLogout () {
      sessionStorage.setItem('token', '')
      this.$message({
        message: '登出成功',
        type: 'success'
      })
      // this.$router.push({ path: '/' })
      location.reload()
      // let formData = new FormData()
      // this.$axios.get(config.API + config.toLogout, formData).then((res) => {
      //   if (res.status === 200) {
      //     if (res.data.re_code === '0') {
      //       this.isLogin = false
      //       // document.cookie = 'null'
      //       // console.log('In toLogout in App', document.cookie)
      //       localStorage.setItem('token', '')
      //       this.$message({
      //         message: '登出成功',
      //         type: 'success'
      //       })
      //       this.$router.push({ path: '/' })
      //       // location.reload()
      //     }
      //   }
      // })
    },
    handleContactIcon (w) {
      if (w === 'github') {
        window.open('https://github.com/TsinghuaAI/CUGE')
      } else {
        window.open('mailto://cuge_baai@163.com')
      }
    },
    handleMenuSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key[0] === 'A') {
        var tid = key.split('-')[4]
        var tname = key.split('@')[1]
        console.log('handleSingle', tid, tname)
        // window.open('/#/taskboard?id=' + tid + '&name=' + tname, '_self')
        // location.href = '/#/taskboard?id=' + tid + '&name=' + tname
        location.href = '/#/dataset?id=' + tid + '&name=' + tname
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
            window.open('/pdf/CUGE.pdf')
            break
          case 'code':
            // this.$router.push({path: 'http://www.baidu.com'})
            window.open('https://github.com/TsinghuaAI/CUGE')
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
            localStorage.setItem('language', 'zh')
            this.handleReload()
            break
          case '9-2':
            // this.$router.push({path: '/user'})
            this.language = en
            localStorage.setItem('language', 'en')
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
    handleLanguage () {
      // console.log('changelanguage')
      if (this.languageswitch) {
        this.language = zh
        localStorage.setItem('language', 'zh')
        this.handleReload()
      } else {
        this.language = en
        localStorage.setItem('language', 'en')
        this.handleReload()
      }
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
  font-family: "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Segoe UI", "PingFang SC", "Hiragino Sans GB",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  height: 200px;
  background-color: black;
  color: white;
  padding-top: 50px;
}

.el-menu--horizontal .el-menu-item.is-active {
  border-bottom: none;
}

#bar{
  border-bottom: none;
}
</style>
<style>
.el-menu-item {
  font-size: 20px;
  font-family: "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Segoe UI", "PingFang SC", "Hiragino Sans GB",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.ads-font {
  font-size: 20px;
  font-family: "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Segoe UI", "PingFang SC", "Hiragino Sans GB",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.clustrMapsLink {
  margin-top: -20px;
}

#language-switch .el-switch__label {
  color: white;
}
</style>
