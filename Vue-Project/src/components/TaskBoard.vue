<template>
  <div class="all">
    <h1 class="title">{{ language.leaderboard_phb }}: {{Gname}}</h1>
    <el-card class="main">
      <div class="main-content">
        <el-table :data="tableData" style="width: 100%" @expand-change="waitToDraw"
          :header-row-style="{'color': '#ffffff','font-size':'17px','text-align':'center'}"
          :header-cell-style="{'background':'#64438D'}"
          :cell-style="cellStyle"
          @row-click="handleRowClick"
        >
          <el-table-column :label="language.leaderboard_rank" prop="rank" width="60"> </el-table-column>
          <el-table-column :label="language.leaderboard_model" prop="name" align="center" width="100"> </el-table-column>
          <el-table-column :label="language.leaderboard_org" prop="org" align="center" width="120"> </el-table-column>
          <el-table-column :label="language.leaderboard_codepaper" prop="plink" align="center" width="160">
            <template slot-scope="scope">
              <el-link :href="scope.row.clink" :disabled="scope.row.clink==''">
                <!-- <i class="el-icon-paperclip"></i> -->
                <img :src="scope.row.clink==''?'https://z3.ax1x.com/2021/08/30/hYfZkV.png':'https://z3.ax1x.com/2021/08/20/fOBmes.png'" style="width:30px;height:30px;">
              </el-link>
              <el-link :href="scope.row.plink" :disabled="scope.row.plink==''">
                <!-- <i class="el-icon-paperclip"></i> -->
                <img :src="scope.row.plink==''?'https://z3.ax1x.com/2021/08/30/hYfZkV.png':'https://z3.ax1x.com/2021/08/20/fOBmes.png'" style="width:30px;height:30px;">
              </el-link>
            </template>
          </el-table-column>
          <!-- <el-table-column label="代码链接" prop="clink">
            <template slot-scope="scope">
              <el-link :href="scope.row.clink">
                <img src="https://z3.ax1x.com/2021/06/24/RQBvFK.png" style="width:30px;height:30px;">
              </el-link>
            </template>
          </el-table-column> -->
          <el-table-column :label="language.leaderboard_submittime" prop="stime" align="center" width="120"> </el-table-column>
          <!-- <el-table-column label="指标" prop="zb" align="center"> </el-table-column> -->
          <el-table-column v-for="(i,index) in newTitle" :label="i" :prop="i" align="center" :key="index"> </el-table-column>
          <el-table-column label="Score" prop="score" align="center"> </el-table-column>
          <!-- <el-table-column :label="language.leaderboard_yyljcy" prop="yyljcy" align="right" width="150">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljcy_hint" placement="top">
                <span>{{language.leaderboard_yyljcy}}</span>
              </el-tooltip>
            </template>
          </el-table-column> -->
          <!-- <el-table-column :label="language.leaderboard_yyljpj" prop="yyljpj" align="right" width="150">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljpj_hint" placement="top">
                <span>{{language.leaderboard_yyljpj}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_xxhq" prop="xxhq" width="150" align="right">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_xxhq_hint" placement="top">
                <span>{{language.leaderboard_xxhq}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_yysc" prop="yysc" align="right" width="120">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_yysc_hint" placement="top">
                <span>{{language.leaderboard_yysc}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_dhjh" prop="dhjh" align="right" width="120">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_dhjh_hint" placement="top">
                <span>{{language.leaderboard_dhjh}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_dyy" prop="dyy" align="right" width="120">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_dyy_hint" placement="top">
                <span>{{language.leaderboard_dyy}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_sxtl" prop="sxtl" align="right" width="120">
            <template slot="header" slot-scope="scope">
              <el-tooltip class="item" effect="dark" :content="language.leaderboard_sxtl_hint" placement="top">
                <span>{{language.leaderboard_sxtl}}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column :label="language.leaderboard_zyzs" prop="score" align="center" width="120"> </el-table-column> -->
          <!-- <el-table-column label="总分" prop="score"> </el-table-column> -->
        </el-table>
      </div>
    </el-card>
    <div style="margin:50px; text-align:left;font-size: 20px; margin-left:50px; margin-bottom:30px;">
      {{language.hint_taskboard}}
    </div>
    <el-drawer
      :visible.sync="drawer"
      direction="rtl"
      size="30%"
      :with-header="false"
    >
      <div class="draw">
        <div class="draw-sub">
          <h1>模型名：{{drawerInfo.name}}</h1>
          <div class="draw-text">
            <!-- {{drawerInfo.link}} -->
            提交时间: {{drawerInfo.stime}}
            <!-- <br>
            Score: {{drawerInfo.score}} -->
          </div>
          <div class="draw-text">
            参数数量: {{drawerInfo.paras}}
          </div>
        </div>
        <hr class="draw-hr">
        <!-- <div class="draw-sub">
          <h1>{{language.Model}}</h1>
          <div>
            {{drawerInfo.model}}
          </div>
        </div>
        <hr class="draw-hr"> -->
        <div class="draw-sub">
          <h1>提交参数</h1>
          <!-- <div>
            是否公开：{{drawerInfo.public}}
          </div> -->
          <div class="draw-text">
            是否使用预训练模型：{{drawerInfo.pre_train ? language.yes : language.no}}
          </div>
          <div class="draw-text">
            是否使用集成学习提升模型表现：{{drawerInfo.integrate ? language.yes : language.no}}
          </div>
          <div class="draw-text">
            是否使用多任务学习提升模型表现：{{drawerInfo.multiple ? language.yes : language.no}}
          </div>
          <!-- <div>
            {{drawerInfo.public}}
          </div> -->
        </div>
        <hr class="draw-hr">
        <div class="draw-sub">
          <h1>提交描述</h1>
          <!-- <div>
            提交描述
          </div> -->
          <div class="draw-text">
            {{drawerInfo.description}}
          </div>
          <hr class="draw-hr">
          <!-- <div>
            <el-link type="primary" :href="'/#/report?id='+drawerInfo.fileid">评测报告</el-link>
          </div> -->
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  props: {
    language: Object
  },
  data () {
    return {
      Gid: '',
      Gname: '',
      newTitle: [],
      drawer: false,
      drawerInfo: {
      },
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
      tableData: [],
      pic: {
        indicator: [
          {
            name: '数学推理',
            max: 500
          },
          {
            name: '对话交互',
            max: 500
          },
          {
            name: '语言生成',
            max: 500
          },
          {
            name: '信息获取及问答',
            max: 500
          },
          {
            name: '语言理解-篇章级',
            max: 500
          },
          {
            name: '语言理解-词句级',
            max: 500
          },
          {
            name: '多语言',
            max: 500
          }
        ],
        data: [
          {
            value: [90.62, 86.36, 23.98, 59.27, 35.37, 34.8]
          }
        ]
      },
      pic_zh: {
        indicator: [
          {
            name: '数学推理',
            max: 500
          },
          {
            name: '对话交互',
            max: 500
          },
          {
            name: '语言生成',
            max: 500
          },
          {
            name: '信息获取及问答',
            max: 500
          },
          {
            name: '语言理解-篇章级',
            max: 500
          },
          {
            name: '语言理解-词句级',
            max: 500
          },
          {
            name: '多语言',
            max: 500
          }
        ],
        data: [
          {
            value: [90.62, 86.36, 23.98, 59.27, 35.37, 34.8]
          }
        ]
      },
      pic_en: {
        indicator: [
          {
            name: 'MR',
            max: 500
          },
          {
            name: 'CI',
            max: 500
          },
          {
            name: 'NLG',
            max: 500
          },
          {
            name: 'IA&QA',
            max: 500
          },
          {
            name: 'NLU-DL',
            max: 500
          },
          {
            name: 'NLU-WSL',
            max: 500
          },
          {
            name: 'ML',
            max: 500
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
    this.Gid = this.$route.query.id
    this.Gname = this.$route.query.name
    this.tableData = []
    let data = {
      'rank_by_ability': ['语言理解能力-词句级', '语言理解能力-篇章级', '信息获取及问答能力', '语言生成能力', '对话交互能力', '多语言能力', '数学推理能力'],
      'start': 1,
      'end': -1
    }
    this.$axios.get(config.API + '/rank?rank_by=' + this.Gid, data).then(res => {
      console.log(res)
      if (res.status === 200) {
        console.log(res)
        var t = res.data.rank_list
        for (var i = 0; i < t.length; i++) {
          var r = t[i]
          console.log(i, r, this.newTitle)
          // var kb = ''
          // for (var key in r.index) {
          //   // console.log(key, r.index[key])
          //   kb = kb + key + ' : ' + r.index[key] + '; '
          // }
          if (this.newTitle.length === 0) {
            for (var tkey in r.index) {
            // console.log(key, r.index[key])
              this.newTitle.push(tkey)
            }
          }
          var toAppend = {
            rank: i + 1,
            name: r.modelname,
            org: r.institution,
            plink: r.paper_url,
            clink: r.code_url,
            // zb: kb,

            // sxtl: r.数学推理能力.ability_sum[0] === null ? '' : r.数学推理能力.ability_sum[0] + ' (' + r.数学推理能力.ability_sum[1] + ')',
            // dyy: r.多语言能力.ability_sum[0] === null ? '' : r.多语言能力.ability_sum[0] + ' (' + r.多语言能力.ability_sum[1] + ')',
            // dhjh: r.对话交互能力.ability_sum[0] === null ? '' : r.对话交互能力.ability_sum[0] + ' (' + r.对话交互能力.ability_sum[1] + ')',
            // yysc: r.语言生成能力.ability_sum[0] === null ? '' : r.语言生成能力.ability_sum[0] + ' (' + r.语言生成能力.ability_sum[1] + ')',
            // xxhq: r.信息获取及问答能力.ability_sum[0] === null ? '' : r.信息获取及问答能力.ability_sum[0] + ' (' + r.信息获取及问答能力.ability_sum[1] + ')',
            // yyljpj: r['语言理解能力-篇章级'].ability_sum[0] === null ? '' : r['语言理解能力-篇章级'].ability_sum[0] + ' (' + r['语言理解能力-篇章级'].ability_sum[1] + ')',
            // yyljcy: r['语言理解能力-词句级'].ability_sum[0] === null ? '' : r['语言理解能力-词句级'].ability_sum[0] + ' (' + r['语言理解能力-词句级'].ability_sum[1] + ')',
            // sxtl_dataset: r.数学推理能力.dataset_score_list,
            // dyy_dataset: r.多语言能力.dataset_score_list,
            // dhjh_dataset: r.对话交互能力.dataset_score_list,
            // yysc_dataset: r.语言生成能力.dataset_score_list,
            // xxhq_dataset: r.信息获取及问答能力.dataset_score_list,
            // yyljpj_dataset: r['语言理解能力-篇章级'].dataset_score_list,
            // yyljcy_dataset: r['语言理解能力-词句级'].dataset_score_list,
            // sxtl_list: r.数学推理能力.ability_sum,
            // dyy_list: r.多语言能力.ability_sum,
            // dhjh_list: r.对话交互能力.ability_sum,
            // yysc_list: r.语言生成能力.ability_sum,
            // xxhq_list: r.信息获取及问答能力.ability_sum,
            // yyljpj_list: r['语言理解能力-篇章级'].ability_sum,
            // yyljcy_list: r['语言理解能力-词句级'].ability_sum,
            stime: r.commit_time,
            public: r.public,
            multiple: r.multiple,
            integrate: r.integrate,
            pre_train: r.pre_train,
            time: r.simple_commit_time,
            paras: r.paras,
            description: r.description,
            score: r.score
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
            // show1: r.多语言能力.dataset_score_list,
            // show2: r.多语言能力.dataset_score_list
          }
          for (tkey in this.newTitle) {
            toAppend[this.newTitle[tkey]] = r.index[this.newTitle[tkey]]
          }
          if (i === 0) {
            // toAppend.rank = ''
          }
          this.tableData.push(toAppend)
          console.log(toAppend)
        }
      }
      console.log('newTITLE', this.newTitle)
    })
  },
  methods: {
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'font-weight: 700; color: black;'
        // background-color:#eceaff;
      } else {
        return 'font-weight: 700; color: black;'
      }
    },
    handleRowClick (row, column, event) {
      console.log(row, column)
      console.log(column.label)
      // this.drawerInfo.rank = row.rank
      // this.drawerInfo.name = row.name
      // this.drawerInfo.link = row.link
      // this.drawerInfo.date = row.date
      // this.drawerInfo.score = row.score
      // this.drawerInfo.model = row.model
      // this.drawerInfo.parameter = row.parameter
      // this.drawerInfo.more = row.more
      if (column.label !== this.language.leaderboard_codepaper) {
        this.drawerInfo = row
        this.drawer = true
      }
    },
    waitToDraw (row, rowList) {
      console.log('row', row)
      if (this.language.language === 'zh') {
        this.pic = this.pic_zh
      } else {
        this.pic = this.pic_en
      }
      this.pic.data = [
        {
          value: [row.sxtl_list[1], row.dhjh_list[1], row.yysc_list[1], row.xxhq_list[1], row.yyljpj_list[1], row.yyljcy_list[1], row.dyy_list[1]]
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

.draw{
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.draw-sub{
  margin-top: 50px;
}
.draw-sub h1{
  color: #7857A1;
}
.draw-hr{
  margin-top: 50px;
}
.draw-text{
  margin-top: 20px;
}
</style>
