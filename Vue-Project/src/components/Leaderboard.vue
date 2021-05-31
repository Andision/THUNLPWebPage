<template>
  <div class="all">
    <h1 class="title">{{ language.leaderboard_phb }}</h1>
    <el-card class="main">
      <div slot="header">
        <div class="main-title">
          <div class="title-title">
            {{ language.task_synl }}
            <el-switch v-model="showAll" active-color="#64438D"> </el-switch>
          </div>
          <hr />
          <div class="title-sub">
            <el-row :gutter="20">
              <el-col :span="4"
                ><div class="title-sub-section">
                  <div class="title-sub-section-text">
                    {{ language.task_sjnl }}
                  </div>
                  <el-switch
                    v-model="s.sj"
                    active-color="#64438D"
                  ></el-switch></div
              ></el-col>
              <el-col :span="4"
                ><div class="title-sub-section">
                  <div class="title-sub-section-text">
                    {{ language.task_ljnl }}
                  </div>
                  <el-switch
                    v-model="s.lj"
                    active-color="#64438D"
                  ></el-switch></div
              ></el-col>
              <el-col :span="4"
                ><div class="title-sub-section">
                  <div class="title-sub-section-text">
                    {{ language.task_jsnl }}
                  </div>
                  <el-switch
                    v-model="s.js"
                    active-color="#64438D"
                  ></el-switch></div
              ></el-col>
              <el-col :span="4"
                ><div class="title-sub-section">
                  <div class="title-sub-section-text">
                    {{ language.task_szjsnl }}
                  </div>
                  <el-switch
                    v-model="s.szjs"
                    active-color="#64438D"
                  ></el-switch></div
              ></el-col>
              <el-col :span="4"
                ><div class="title-sub-section">
                  <div class="title-sub-section-text">
                    {{ language.task_scnl }}
                  </div>
                  <el-switch
                    v-model="s.sc"
                    active-color="#64438D"
                  ></el-switch></div
              ></el-col>
              <el-col :span="4"
                ><div class="title-sub-section">
                  <div class="title-sub-section-text">
                    {{ language.task_dyynl }}
                  </div>
                  <el-switch
                    v-model="s.dyy"
                    active-color="#64438D"
                  ></el-switch></div
              ></el-col>
            </el-row>
          </div>
          <hr />
          <div class="title-select">
            <el-checkbox-group v-model="c" :min="0" :max="1">
              <el-checkbox label="NENGLI" v-model="c.nl"
                ><div class="title-select-text">
                  {{ language.task_nlb }}
                </div></el-checkbox
              >
              <el-checkbox label="JINJIAN" v-model="c.jj"
                ><div class="title-select-text">
                  {{ language.task_jjb }}
                </div></el-checkbox
              >
            </el-checkbox-group>
          </div>
          <hr />
        </div>
      </div>
      <div class="main-content">
        <el-table :data="tableData" style="width: 100%" @expand-change="waitToDraw">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-container>
                <el-aside width="450px"
                  ><div id="main" style="width: 400px; height: 300px"></div
                ></el-aside>
                <el-main>
                  <el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="">
                          <el-button type="text">{{
                            language.task_sjnl
                          }}</el-button>
                        </div></el-col
                      >
                      <el-col :span="4"
                        ><div class="">
                          <el-button type="text">{{
                            language.task_ljnl
                          }}</el-button>
                        </div></el-col
                      >
                      <el-col :span="4"
                        ><div class="">
                          <el-button type="text">{{
                            language.task_jsnl
                          }}</el-button>
                        </div></el-col
                      >
                      <el-col :span="4"
                        ><div class="">
                          <el-button type="text">{{
                            language.task_szjsnl
                          }}</el-button>
                        </div></el-col
                      >
                      <el-col :span="4"
                        ><div class="">
                          <el-button type="text">{{
                            language.task_scnl
                          }}</el-button>
                        </div></el-col
                      >
                      <el-col :span="4"
                        ><div class="">
                          <el-button type="text">{{
                            language.task_dyynl
                          }}</el-button>
                        </div></el-col
                      >
                    </el-row>
                  </el-row>
                  <hr />
                  <el-row>
                    <el-row>
                      <el-col
                        v-for="(i, index) in taskData"
                        :key="index"
                        :span="Math.floor(24 / taskData.length)"
                        ><div class="">
                          <el-button type="text">{{ i.name }}</el-button>
                        </div></el-col
                      >
                    </el-row>
                    <hr />
                    <el-row>
                      <el-col
                        v-for="(i, index) in taskData"
                        :key="index"
                        :span="Math.floor(24 / taskData.length)"
                        ><div class="">{{ i.score }}</div></el-col
                      >
                    </el-row>
                    <hr />
                  </el-row>
                  <el-row>
                    <el-row>
                      <el-col
                        v-for="(i, index) in dataData"
                        :key="index"
                        :span="Math.floor(24 / dataData.length)"
                        ><div class="">
                          <el-button type="text">{{ i.name }}</el-button>
                        </div></el-col
                      >
                    </el-row>
                    <hr />
                    <el-row>
                      <el-col
                        v-for="(i, index) in dataData"
                        :key="index"
                        :span="Math.floor(24 / dataData.length)"
                        ><div class="">{{ i.score }}</div></el-col
                      >
                    </el-row>
                    <hr />
                  </el-row>
                </el-main>
              </el-container>
            </template>
          </el-table-column>
          <el-table-column label="排行" prop="rank"> </el-table-column>
          <el-table-column label="模型名" prop="name"> </el-table-column>
          <el-table-column label="机构" prop="org"> </el-table-column>
          <el-table-column label="论文链接" prop="plink"> </el-table-column>
          <el-table-column label="代码链接" prop="clink"> </el-table-column>
          <el-table-column label="识记能力" prop="sj"> </el-table-column>
          <el-table-column label="理解能力" prop="lj"> </el-table-column>
          <el-table-column label="检索能力" prop="js"> </el-table-column>
          <el-table-column label="数值计算能力" prop="szjs"> </el-table-column>
          <el-table-column label="生成能力" prop="sc"> </el-table-column>
          <el-table-column label="多语言能力" prop="dyy"> </el-table-column>
          <el-table-column label="总分" prop="score"> </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import en from '@/components/en.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      language: en,
      showAll: true,
      s: {
        sj: true,
        lj: true,
        js: true,
        szjs: true,
        sc: true,
        dyy: true
      },
      c: ['NENGLI', 'JINJIAN'],
      tableData: [
        {
          rank: '1',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '2',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '3',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '4',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '5',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '6',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '7',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        },
        {
          rank: '8',
          name: 'Name',
          org: 'THU',
          plink: '123',
          clink: '123',
          sj: '99',
          lj: '99',
          js: '99',
          szjs: '99',
          sc: '99',
          dyy: '99',
          score: '99'
        }
      ],
      taskData: [
        {
          name: 'task1',
          score: '90'
        },
        {
          name: 'task2',
          score: '90'
        },
        {
          name: 'task3',
          score: '90'
        },
        {
          name: 'task4',
          score: '90'
        },
        {
          name: 'task5',
          score: '90'
        }
      ],
      dataData: [
        {
          name: 'data1',
          score: '90'
        },
        {
          name: 'data2',
          score: '90'
        },
        {
          name: 'data3',
          score: '90'
        }
      ],
      pic: {
        indicator: [
          {
            name: '识记能力',
            max: 6500
          },
          {
            name: '理解能力',
            max: 16000
          },
          {
            name: '多语言能力',
            max: 30000
          },
          {
            name: '数值计算能力',
            max: 38000
          },
          {
            name: '检索能力',
            max: 52000
          },
          {
            name: '生成能力',
            max: 25000
          }
        ],
        data: [
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）'
          }
        ]
      }
    }
  },
  methods: {
    waitToDraw (row, rowList) {
      console.log(row)
      this.$nextTick(() => {
        this.drawChart()
      })
    },
    drawChart () {
      // Initialize the echarts instance based on the prepared dom
      let myChart = this.$echarts.init(document.getElementById('main'))
      // Specify configuration items and data for the chart
      let option = {
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#64438D',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.pic.indicator
        },
        series: [
          {
            type: 'radar',
            data: this.pic.data
          }
        ]
      }
      // Use the configuration items and data just specified to display the chart.
      myChart.setOption(option)
    }
  },
  watch: {
    showAll (curVal, oldVal) {
      if (curVal) {
        this.s.sj = true
        this.s.lj = true
        this.s.js = true
        this.s.szjs = true
        this.s.sc = true
        this.s.dyy = true
      } else {
        this.s.sj = false
        this.s.lj = false
        this.s.js = false
        this.s.szjs = false
        this.s.sc = false
        this.s.dyy = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all {
  width: 80%;
  margin: auto;
}
.title {
  text-align: left;
  margin: 50px;
  color: #64438d;
  font-size: 40px;
}
.main {
  margin: 50px;
}
.title-title {
  text-align: left;
  font-size: x-large;
  font-weight: bold;
}
.title-sub-section {
  text-align: left;
}
.title-sub-section-text {
  margin-right: 10px;
  display: inline;
  font-size: large;
  font-weight: bold;
}
.title-select {
  text-align: right;
}
.title-select-text {
  font-size: large;
  font-weight: bold;
}
.title-title,
.title-sub,
.title-select {
  margin-top: 20px;
}
</style>
