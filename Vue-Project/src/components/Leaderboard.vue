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
            <div style="display:flex;flex-direction:row;justify-content: space-between;">
              <!-- <div class="title-sub-section"><div class="title-sub-section-text">{{language.task_sjnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.sj" active-color="#64438D"></el-switch></div></div>
              <div class="title-sub-section"><div class="title-sub-section-text">{{language.task_ljnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.lj" active-color="#64438D"></el-switch></div></div>
              <div class="title-sub-section"><div class="title-sub-section-text">{{language.task_jsnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.js" active-color="#64438D"></el-switch></div></div>
              <div class="title-sub-section"><div class="title-sub-section-text">{{language.task_szjsnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.szjs" active-color="#64438D"></el-switch></div></div>
              <div class="title-sub-section"><div class="title-sub-section-text">{{language.task_scnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.sc" active-color="#64438D"></el-switch></div></div>
              <div class="title-sub-section"><div class="title-sub-section-text">{{language.task_dyynl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.dyy" active-color="#64438D"></el-switch></div></div> -->
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  语言理解能力-词语级
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.yyljcy" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  语言理解能力-篇章级
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.yyljpj" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  信息获取及问答能力
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.xxhq" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  语言生成能力
                </div>
                <div class="title-sub-section-btn">
                  <el-switch
                    v-model="s.yysc"
                    active-color="#64438D"
                  ></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  对话交互能力
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.dhjh" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  多语言能力
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.dyy" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  数学推理能力
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.sxtl" active-color="#64438D"></el-switch>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="title-select">
            <el-checkbox v-model="checked2" disabled>
              {{language.task_jjb}}
            </el-checkbox>
          </div>
          <!-- <hr /> -->
        </div>
      </div>
      <div class="main-content">
        <el-table :data="tableData" style="width: 100%" @expand-change="waitToDraw"
          :header-row-style="{'color': '#ffffff',}"
          :header-cell-style="{background:'#64438D'}"
          cell-style="font-weight: 700; color: black;"
        >
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-container>
                <el-aside width="450px"
                  ><div :id="'main'+scope.row.rank" style="width: 400px; height: 300px"></div
                ></el-aside>
                <el-main>
                  <el-row>
                    <el-row>
                      <!-- <el-col
                        v-for="(i, index) in ads"
                        :key="index"
                        :span="Math.floor(24 / taskData.length)"
                        ><div class="">
                          <el-button type="text">{{ i.name }}</el-button>
                        </div></el-col
                      > -->
                      <el-col :span="7">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.yyljcy_dataset;scope.row.show2=scope.row.yyljcy_dataset">
                            语言理解能力-词语级
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :span="7">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.yyljpj_dataset;scope.row.show2=scope.row.yyljpj_dataset">
                            语言理解能力-篇章级
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :span="7">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.xxhq_dataset;scope.row.show2=scope.row.xxhq_dataset">
                            信息获取及问答能力
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :span="3">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.yysc_dataset;scope.row.show2=scope.row.yysc_dataset">
                            语言生成能力
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.dhjh_dataset;scope.row.show2=scope.row.dhjh_dataset">
                            对话交互能力
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.dyy_dataset;scope.row.show2=scope.row.dyy_dataset">
                            多语言能力
                          </el-button>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="">
                          <el-button type="text" @click="scope.row.show1=scope.row.sxtl_dataset;scope.row.show2=scope.row.sxtl_dataset">
                            数学推理能力
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, index) in scope.row.show1"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show1.length)"
                      >
                        <div class="">
                          <el-button type="text">
                            {{ i.task }}
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, index) in scope.row.show1"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show1.length)"
                      >
                        <div class="">
                          <div class="score">
                            {{ i.score[0] === null ? '' : i.score[0]+'('+i.score[1]+')' }}
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, index) in scope.row.show2"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show2.length)"
                      >
                        <div class="">
                          <el-button type="text">
                            {{ i.name }}
                          </el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <hr class="inner-hr"/>
                    <el-row>
                      <el-col
                        v-for="(i, index) in scope.row.show2"
                        :key="index"
                        :span="Math.floor(24 / scope.row.show2.length)"
                      >
                        <div class="">
                          <div class="score">
                            {{ i.score[0] === null ? '' : i.score[0]+'('+i.score[1]+')' }}
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-row>
                </el-main>
              </el-container>
            </template>
          </el-table-column>
          <el-table-column label="排行" prop="rank"> </el-table-column>
          <el-table-column label="模型名" prop="name"> </el-table-column>
          <el-table-column label="机构" prop="org"> </el-table-column>
          <el-table-column label="论文链接" prop="plink">
            <template slot-scope="scope">
              <el-link :href="scope.row.plink">
                <!-- <i class="el-icon-paperclip"></i> -->
                <img src="https://z3.ax1x.com/2021/06/24/RQBvFK.png" style="width:30px;height:30px;">
              </el-link>
            </template>
          </el-table-column>
          <el-table-column label="代码链接" prop="clink">
            <template slot-scope="scope">
              <el-link :href="scope.row.clink">
                <!-- <i class="el-icon-paperclip"></i> -->
                <img src="https://z3.ax1x.com/2021/06/24/RQBvFK.png" style="width:30px;height:30px;">
              </el-link>
            </template>
          </el-table-column>
          <el-table-column label="提交时间" prop="stime"> </el-table-column>
          <el-table-column label="语言理解能力-词语级" prop="yyljcy"> </el-table-column>
          <el-table-column label="语言理解能力-篇章级" prop="yyljpj"> </el-table-column>
          <el-table-column label="信息获取及问答能力" prop="xxhq"> </el-table-column>
          <el-table-column label="语言生成能力" prop="yysc"> </el-table-column>
          <el-table-column label="对话交互能力" prop="dhjh"> </el-table-column>
          <el-table-column label="多语言能力" prop="dyy"> </el-table-column>
          <el-table-column label="数学推理能力" prop="sxtl"> </el-table-column>
          <el-table-column label="智源指数" prop="score"> </el-table-column>
          <!-- <el-table-column label="总分" prop="score"> </el-table-column> -->
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import en from '@/components/en.json'
import config from '@/components/config.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      language: en,
      checked2: true,
      showAll: true,
      s: {
        sxtl: true,
        dyy: true,
        dhjh: true,
        yysc: true,
        xxhq: true,
        yyljpj: true,
        yyljcy: true
      },
      c: ['NENGLI', 'JINJIAN'],
      tableData: [
        {
          rank: '1',
          name: '"mT5-XXL"',
          org: '"CUGE Team"',
          plink: 'https://arxiv.org/abs/2010.11934',
          clink: 'https://github.com/google-research/multilingual-t5',
          sj: '90.62',
          lj: '86.36',
          js: '35.37',
          szjs: '59.27',
          sc: '34.8',
          dyy: '23.98',
          score: '99',
          show1: [
            {
              name: '阅读理解',
              score: '86.36'
            }
          ],
          show2: [
            {
              name: 'C3',
              score: '86.36'
            }
          ],
          expand: [
            {
              name: 'WMT20',
              score: 23.98
            },
            {
              name: 'Math23K',
              score: 59.27
            },
            {
              name: 'Sogou-Log',
              score: 35.37
            },
            {
              name: 'C3',
              score: 86.36
            },
            {
              name: 'LCSTS',
              score: 34.8
            },
            {
              name: 'CCPR',
              score: 90.62
            }
          ]
        }
      ],
      pic: {
        indicator: [
          {
            name: '数学推理能力',
            max: 100
          },
          {
            name: '对话交互能力',
            max: 100
          },
          {
            name: '语言生成能力',
            max: 100
          },
          {
            name: '信息获取及问答能力',
            max: 100
          },
          {
            name: '语言理解能力-篇章级',
            max: 100
          },
          {
            name: '语言理解能力-词语级',
            max: 100
          },
          {
            name: '多语言能力',
            max: 100
          }
        ],
        data: [
          {
            value: [90.62, 86.36, 23.98, 59.27, 35.37, 34.8]
          }
        ]
      }
    }
  },
  mounted: function () {
    this.tableData = []
    let data = {
      'rank_by_ability': ['语言理解能力-词语级', '语言理解能力-篇章级', '信息获取及问答能力', '语言生成能力', '对话交互能力', '多语言能力', '数学推理能力'],
      'start': 1,
      'end': -1
    }
    this.$axios.post(config.API + config.getRanklist, data).then(res => {
      console.log(res)
      if (res.status === 200) {
        console.log(res)
        var t = res.data.rank_list
        for (var i = 0; i < t.length; i++) {
          var r = t[i]
          console.log(i, r)
          var toAppend = {
            rank: i + 1,
            name: r.modelname,
            org: r.institution,
            plink: r.paper_url,
            clink: r.code_url,
            // sxtl: r.数学推理能力.ability_sum[0],
            // dyy: r.多语言能力.ability_sum[0],
            // dhjh: r.对话交互能力.ability_sum[0],
            // yysc: r.语言生成能力.ability_sum[0],
            // xxhq: r.信息获取及问答能力.ability_sum[0],
            // yyljpj: r['语言理解能力-篇章级'].ability_sum[0],
            // yyljcy: r['语言理解能力-词语级'].ability_sum[0],
            sxtl: r.数学推理能力.ability_sum[0] === null ? '' : r.数学推理能力.ability_sum[0] + '(' + r.数学推理能力.ability_sum[1] + ')',
            dyy: r.多语言能力.ability_sum[0] === null ? '' : r.多语言能力.ability_sum[0] + '(' + r.多语言能力.ability_sum[1] + ')',
            dhjh: r.对话交互能力.ability_sum[0] === null ? '' : r.对话交互能力.ability_sum[0] + '(' + r.对话交互能力.ability_sum[1] + ')',
            yysc: r.语言生成能力.ability_sum[0] === null ? '' : r.语言生成能力.ability_sum[0] + '(' + r.语言生成能力.ability_sum[1] + ')',
            xxhq: r.信息获取及问答能力.ability_sum[0] === null ? '' : r.信息获取及问答能力.ability_sum[0] + '(' + r.信息获取及问答能力.ability_sum[1] + ')',
            yyljpj: r['语言理解能力-篇章级'].ability_sum[0] === null ? '' : r['语言理解能力-篇章级'].ability_sum[0] + '(' + r['语言理解能力-篇章级'].ability_sum[1] + ')',
            yyljcy: r['语言理解能力-词语级'].ability_sum[0] === null ? '' : r['语言理解能力-词语级'].ability_sum[0] + '(' + r['语言理解能力-词语级'].ability_sum[1] + ')',
            score: r.总分[0] === null ? '' : r.总分[0] + '(' + r.总分[1] + ')',
            // sxtl_sub: r.数学推理能力[1],
            // dyy_sub: r.多语言能力[1],
            // dhjh_sub: r.对话交互能力[1],
            // yysc_sub: r.语言生成能力[1],
            // xxhq_sub: r.信息获取及问答能力[1],
            // yyljpj_sub: r['语言理解能力-篇章级'][1],
            // yyljcy_sub: r['语言理解能力-词语级'][1],
            // score_sub: r.智源指数[1],
            sxtl_dataset: r.数学推理能力.dataset_score_list,
            dyy_dataset: r.多语言能力.dataset_score_list,
            dhjh_dataset: r.对话交互能力.dataset_score_list,
            yysc_dataset: r.语言生成能力.dataset_score_list,
            xxhq_dataset: r.信息获取及问答能力.dataset_score_list,
            yyljpj_dataset: r['语言理解能力-篇章级'].dataset_score_list,
            yyljcy_dataset: r['语言理解能力-词语级'].dataset_score_list,
            sxtl_list: r.数学推理能力.ability_sum,
            dyy_list: r.多语言能力.ability_sum,
            dhjh_list: r.对话交互能力.ability_sum,
            yysc_list: r.语言生成能力.ability_sum,
            xxhq_list: r.信息获取及问答能力.ability_sum,
            yyljpj_list: r['语言理解能力-篇章级'].ability_sum,
            yyljcy_list: r['语言理解能力-词语级'].ability_sum,
            stime: r.simple_commit_time,
            // sj: r.识记能力.ability_sum[0],
            // lj: r.理解能力.ability_sum[0],
            // js: r.检索能力.ability_sum[0],
            // szjs: r.数值计算能力.ability_sum[0],
            // sc: r.生成能力.ability_sum[0],
            // dyy: r.多语言能力.ability_sum[0],
            // sj_list: r.识记能力.ability_sum,
            // lj_list: r.理解能力.ability_sum,
            // js_list: r.检索能力.ability_sum,
            // szjs_list: r.数值计算能力.ability_sum,
            // sc_list: r.生成能力.ability_sum,
            // dyy_list: r.多语言能力.ability_sum,
            // score: r.总分[0],
            // score_list: r.总分,
            // sjd: r.识记能力.dataset_score_list,
            // ljd: r.理解能力.dataset_score_list,
            // jsd: r.检索能力.dataset_score_list,
            // szjsd: r.数值计算能力.dataset_score_list,
            // scd: r.生成能力.dataset_score_list,
            // dyyd: r.多语言能力.dataset_score_list,
            show1: r.多语言能力.dataset_score_list,
            show2: r.多语言能力.dataset_score_list
          }
          this.tableData.push(toAppend)
          console.log(toAppend)
        }
      }
    })
  },
  methods: {
    waitToDraw (row, rowList) {
      console.log('row', row)
      this.pic.data = [
        {
          value: [row.sxtl_list[0], row.dhjh_list[0], row.yysc_list[0], row.xxhq_list[0], row.yyljpj_list[0], row.yyljcy_list[0], row.dyy_list[0]]
        }
      ]
      console.log(this.pic.data)
      this.$nextTick(() => {
        this.drawChart(row.rank)
      })
    },
    drawChart (i) {
      // Initialize the echarts instance based on the prepared dom
      let myChart = this.$echarts.init(document.getElementById('main' + i))
      // Specify configuration items and data for the chart
      let option = {
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#062A4E',
              fontWeight: 'bolder',
              fontSize: 16,
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#593587', '#593587', '#6F4D99', '#8C73AB', '#C09ADE'] // 图表背景网格的颜色
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 0,
              color: '#B0BBCD' // 图表背景网格线的颜色
            }
          },
          indicator: this.pic.indicator
        },
        series: [
          {
            type: 'radar',
            data: this.pic.data,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)', // 图表中各个图区域的边框线拐点颜色
                lineStyle: {
                  color: '#ECEAFF', // 图表中各个图区域的边框线颜色
                  width: 5
                },
                areaStyle: {
                  type: 'default'
                }
              }
            }
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
  width: 90%;
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
.title-sub-section-btn{
  display: inline;
}
.inner-hr{
  height: 1px;
  background: #9AB1DE;
  border: 0;
}
.score{
  font-weight: bolder;
  color: black;
}
</style>
