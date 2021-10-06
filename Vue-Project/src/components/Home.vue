<template>
  <div class="all">
    <!-- <el-button type="text" @click="handleLogin(true)"
      >打开嵌套表格的 Dialog</el-button
    > -->
    <div class="home-title">
      <div class="title1">
        {{ language.home_title1 }}
      </div>
      <div class="title2">
        {{ language.home_title2 }}
      </div>
      <div class="titledetail">
        {{ language.home_titledetail }}
      </div>
    </div>

    <div class="home-second">
      <div class="second-title">
        <!-- {{language.home_secondtitle}} -->
        委员单位 | Committee Organization
      </div>
      <hr class="second-hr" />
      <!-- <div class="second-list" style="min-height:300px;">
        <ul>
          <li class="second-list-item" v-for="(item,index) in org" :key="index">
            ●{{kb}} {{kb}}{{ item.zh }}
            <br>
            {{kb}}{{kb}}{{kb}}{{ item.en }}
            <br>
          </li>
        </ul>
      </div> -->
      <div style="margin: 50px;">
        <div v-for="(row, index1) in neworg" :key="index1" style="margin-top: 30px;">
          <el-row>
            <el-col :span="6" v-for="(col, index2) in row" :key="index2">
              <el-row>
                <el-image
                  :src="col.pic"
                  style=" height: 100px; width:100px;"
                ></el-image>
              </el-row>
              <el-row> {{col.zh}} </el-row>
              <el-row> {{col.en}} </el-row>
            </el-col>
          </el-row>
          <hr class="second-hr" color="#F5F4FE" />
        </div>
      </div>
      <hr class="second-hr" color="#F5F4FE" />
      <!-- <div class="second-logo">
        <div
          class="second-logo-item"
          v-for="(item, index) in logo"
          :key="index"
        >
          <img class="pic-logo" :src="item" />
        </div>
      </div> -->
    </div>

    <div class="home-second" style="margin-top: -50px">
      <div class="second-title">
        <!-- {{language.home_secondtitle}} -->
        支持单位 | Supporting Organization
      </div>
      <hr class="second-hr" />
      <div class="second-list" style="text-align: center; margin-top: 30px">
        <!-- <div style="margin:auto;" v-for="(item,index) in org1" :key="index">
          <el-row>
            <el-col :span="8" style="min-height:10px;">
              <div>
              </div>
            </el-col>
            <el-col :span="8" style="text-align:left;" class="second-list-item">
              <el-row>
                ●{{kb}}{{kb}}{{ item.zh }}
              </el-row>
              <el-row>
                {{kb}}{{kb}}{{kb}}{{ item.en }}
              </el-row>
            </el-col>
            <el-col :span="8">
              <div>
              </div>
            </el-col>
          </el-row>
        </div> -->
      </div>
      <hr class="second-hr" color="#F5F4FE" />
      <a href="https://www.baai.ac.cn/">
        <el-image
          src="https://z3.ax1x.com/2021/09/16/4nzcTS.jpg"
          style="width: 200px; height: 80px"
        ></el-image>
      </a>
      <!-- <div class="second-logo" style="text-align:center;">
        <el-row>
          <el-col :span="8" style="min-height:10px;">
            <div>
            </div>
          </el-col>
          <el-col :span="8" style="">
            <a href="http://baai.ac.cn">
              <img class="pic-logo-support" src="https://z3.ax1x.com/2021/09/07/ho7fHA.jpg"/>
            </a>
          </el-col>
          <el-col :span="8">
            <div>
            </div>
          </el-col>
        </el-row>
        <div class="second-logo-item-support" v-for="(item,index) in logo1" :key="index" style="margin:auto;">
          <img class="pic-logo-support" :src="item"/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      org1: [
        {
          zh: '北京智源人工智能研究院',
          en: 'Beijing Academy of Artificial Intelligence，BAAI'
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
      ],
      logo1: ['https://z3.ax1x.com/2021/09/07/ho7fHA.jpg'],
      neworg: [
        [
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDfj1.png', zh: '清华大学', en: 'Tsinghua University' },
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDyAU.png', zh: '北京大学', en: 'Peking University' },
          { pic: 'https://z3.ax1x.com/2021/10/06/4xlzaq.png', zh: '中国科学院', en: 'Chinese Academy of Sciences' },
          { pic: 'https://z3.ax1x.com/2021/10/05/4vD6NF.png', zh: '中国人民大学', en: 'Renmin University' }
        ],
        [
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDr7T.png', zh: '北京语言大学', en: 'Beijing Language and Culture University' },
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDIHK.png', zh: '山西大学', en: 'Shanxi University' },
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDR39.png', zh: '大连理工大学', en: 'Dalian University of Technology' },
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDch4.png', zh: '哈尔滨工业大学', en: 'Harbin Institute of Technology' }
        ],
        [
          { pic: 'https://z3.ax1x.com/2021/10/05/4vD4nx.png', zh: '复旦大学', en: 'Fudan University' },
          { pic: 'https://z3.ax1x.com/2021/10/05/4vDWcR.png', zh: '苏州大学', en: 'Soochow University' },
          { pic: 'https://z3.ax1x.com/2021/10/06/4xlxZn.png', zh: '京东', en: 'JD.COM' }
        ]
      ]
      // neworg: [
      //   ['https://z3.ax1x.com/2021/09/18/41kB4A.png',
      //     'https://z3.ax1x.com/2021/09/18/41k90g.png',
      //     'https://z3.ax1x.com/2021/09/18/41kpnS.png',
      //     'https://z3.ax1x.com/2021/09/18/41kFts.png'],
      //   ['https://z3.ax1x.com/2021/09/18/41kC7Q.png',
      //     'https://z3.ax1x.com/2021/09/18/41kkhn.png',
      //     'https://z3.ax1x.com/2021/09/18/41kV10.png',
      //     'https://z3.ax1x.com/2021/09/18/41kEpq.png'],
      //   ['https://z3.ax1x.com/2021/09/18/41kZcV.png',
      //     'https://z3.ax1x.com/2021/09/18/41kikj.png',
      //     'https://z3.ax1x.com/2021/09/18/41knnU.png']
      // ]
    }
  },
  props: {
    language: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  background-color: #f5f4fe;
}
.main {
  background-color: #f5f4fe;
}
</style>

<style scoped>
.all {
  background-color: #f5f4fe;
  min-height: 800px;
}
.home-title {
  text-align: center;
  background-color: white;
  padding: 50px;
  padding-top: 200px;
  padding-bottom: 200px;
}
.home-second {
  padding: 50px;
  text-align: center;
}
.title1 {
  color: #7857a1;
  font-size: 70px;
  font-weight: bold;
  margin: 20px;
}
.title2 {
  color: #7857a1;
  font-weight: bold;
  margin: 20px;
  font-size: 40px;
  padding: 50px;
  margin-top: -50px;
}
.titledetail {
  font-weight: normal;
  padding-left: 10%;
  padding-right: 10%;
  margin: auto;
  text-align: left;
  font-size: 30px;
  margin-top: -50px;
  text-align: justify;
}
.second-title {
  color: #062a4e;
  font-size: larger;
  font-weight: bold;
}
.second-hr {
  width: 90%;
}

.second-list {
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
.second-list-item {
  color: #062a4e;
  font-size: medium;
  font-weight: bold;
  min-height: 50px;
}

.second-logo {
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
  min-height: 100px;
}
.second-logo-item {
  list-style-type: none;
  float: left;
  margin-left: 50px;
  margin-bottom: 10px;
}
.pic-logo {
  width: 100px;
  height: 40px;
  display: flex;
}
.pic-logo-support {
  width: 150px;
  height: 40px;
  /* display: flex; */
}
.second-logo-item-support {
  /* list-style-type: none;
  float:left;
  margin-bottom: 10px; */
  /* margin-left: 800px; */
  text-align: center;
}
.second-list-item-support {
  color: #062a4e;
  font-size: medium;
  font-weight: bold;
  /* margin-left: 100px; */
}
</style>
