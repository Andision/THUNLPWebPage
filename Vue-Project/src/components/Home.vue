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
      <hr class="second-hr" color="#F5F4FE" />
      <div class="second-logo">
        <!-- <ul> -->
        <div class="second-logo-item" v-for="(item,index) in logo" :key="index">
          <img class="pic-logo" :src="item"/>
        </div>
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
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
        },
        {
          zh: '复旦大学',
          en: 'Fudan University'
        },
        {
          zh: '苏州大学',
          en: 'Soochow University'
        },
        {
          zh: '大连理工大学',
          en: 'Dalian University of Technology'
        },
        {
          zh: '山西大学',
          en: 'Shanxi University'
        }
      ],
      logo: [
        'https://z3.ax1x.com/2021/06/02/2ltLAx.png',
        'https://z3.ax1x.com/2021/06/02/2ltON6.png',
        'https://z3.ax1x.com/2021/06/02/2ltv9O.png',
        'https://z3.ax1x.com/2021/06/02/2ltx3D.png',
        'https://z3.ax1x.com/2021/06/02/2lNSjH.png',
        'https://z3.ax1x.com/2021/06/02/2lN9ud.png',
        'https://z3.ax1x.com/2021/06/04/2GUQeg.png',
        'https://z3.ax1x.com/2021/06/02/2lNKDs.png',
        'https://z3.ax1x.com/2021/06/02/2lNuuj.png',
        'https://z3.ax1x.com/2021/06/02/2lNlEq.png',
        'https://z3.ax1x.com/2021/06/02/2lNMbn.png'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-main{
  background-color: #F5F4FE;
}
.main{
  background-color: #F5F4FE;
}
</style>

<style scoped>
.all{
  background-color: #F5F4FE;
  min-height: 800px;
}
.home-title{
  text-align: center;
  background-color: white;
  padding: 50px;
  padding-top: 200px;
  padding-bottom: 200px;
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
  margin: auto;
  text-align: left;
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
  margin-left: 10%;
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
.pic-logo{
  width: 100px;
  height: 40px;
  display: flex;

}
</style>
