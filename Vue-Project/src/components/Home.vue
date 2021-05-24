<template>
  <div class="all">
    <!-- <el-button type="text" @click="handleLogin(true)"
      >打开嵌套表格的 Dialog</el-button
    > -->
    <div class="home-title">
      <div class="title1">
        {{language.home_title1}}
      </div>
      <div class="title2">
        {{language.home_title2}}
      </div>
      <div class="titledetail">
        {{language.home_titledetail}}
      </div>
    </div>

    <div class="home-second">
      <div class="second-title">
        {{language.home_secondtitle}}
      </div>
      <hr class="second-hr">
      <div class="second-list">
        <ul>
          <li class="second-list-item" v-for="(item,index) in org" :key="index">
            ●{{kb}} {{kb}}{{ item.zh }}
            <br>
            {{kb}}{{kb}}{{kb}}{{ item.en }}
          </li>
        </ul>
      </div>
      <hr class="second-hr" color="#ECEAFF" />
      <div class="second-logo">
        <ul>
          <li class="second-logo-item" v-for="(item,index) in logo" :key="index">
            <img :src="item"/>
          </li>
        </ul>
      </div>
    </div>
    <LoginDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></LoginDoalog>
  </div>
</template>

<script>
import LoginDoalog from '@/components/LoginDialog.vue'
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
      dialogLoginVisible: false,
      kb: '　',
      org: [
        {
          zh: '清华大学',
          en: 'Tsinghua University'
        },
        {
          zh: '北京大学',
          en: 'Peking University'
        },
        {
          zh: '中国科学院',
          en: 'Chinese Academy of Sciences'
        },
        {
          zh: '中国人民大学',
          en: 'Renmin University'
        },
        {
          zh: '北京语言大学',
          en: 'Beijing Language and Culture University'
        },
        {
          zh: '哈尔滨工业大学',
          en: 'Harbin Institute of Technology'
        },
        {
          zh: '京东',
          en: 'JD.COM'
        }
      ],
      logo: [
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png',
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png',
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png',
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png',
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png',
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png',
        'https://z3.ax1x.com/2021/05/19/g5FLgx.png'
      ]
    }
  },
  components: { LoginDoalog },
  methods: {
    handleLogin (isLocal) {
      if (isLocal) {
        this.dialogLoginVisible = true
      } else {
        this.dialogLoginVisible = false
      }
      console.log(this.dialogLoginVisible)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  background-color: #F5F4FE;
  min-height: 800px;
}
.home-title{
  text-align: center;
  background-color: white;
  padding: 50px;
}
.home-second{
  padding: 50px;
  text-align: center;
}
.title1{
  color: #7857A1;
  font-size: 50px;
  font-weight: bold;
  margin: 20px;
}
.title2{
  color: #7857A1;
  font-weight: bold;
  margin: 20px;
}
.titledetail{
  font-weight: normal;
  padding-left: 20%;
  padding-right: 20%;
}
.second-title{
  color: #062A4E;
  font-size: larger;
  font-weight: bold;
}
.second-hr{
  width: 90%;
}

.second-list{
  margin: 30px;
}

.second-list ul {
  columns: 3;
}
.second-list li {
  padding: 10px;
  list-style-type: none;
  text-align: left;
}
.second-list-item{
  color: #062A4E;
  font-size: small;
  font-weight: bold;
}

.second-logo{
  margin: 30px;
}
.second-logo-item{
  list-style-type: none;
  float:left;
  margin-left: 50px;
  margin-bottom: 10px;
}
</style>
