<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div id="app">
    <el-container class="container">
      <el-header class="header">
        <el-menu
          :default-active="activeIndex"
          class="el-menu"
          mode="horizontal"
          @select="handleMenuSelect"
        >
          <div style="float: left; margin-left: 50px; padding: 5px">
            <img src="./assets/logo.png" style="height: 45px" />
          </div>

          <el-menu-item class="menu-item" index="7" style="float: right">{{
            language.User
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="6" style="float: right">{{
            language.Download
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="5" style="float: right">{{
            language.Submit
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="4" style="float: right">{{
            language.Paper
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="3" style="float: right">{{
            language.FAQ
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="2" style="float: right">{{
            language.Leaderboard
          }}</el-menu-item>
          <el-menu-item class="menu-item" index="1" style="float: right">{{
            language.Tasks
          }}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main"><router-view /></el-main>
      <el-footer class="footer">
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
  </div>
</template>

<script>
import en from '@/components/en.json'
export default {
  name: 'App',
  data () {
    return {
      language: en,
      activeIndex: '0'
    }
  }
}
</script>

<style>
#app {
  font-family: "Verdana", Helvetica, Arial, sans-serif;
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
  background-color: #f1f1f1;
  margin: 0;
}

.el-menu {
  margin: 0;
  width: 100%;
  font-weight: bolder;
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
</style>
