<template>
  <div class="all">
    <h1 class="title">{{language.user_submitRecord}}</h1>
    <el-tabs v-model="activeName" class="main">
      <el-tab-pane label="全榜" name="first">
        <el-card>
          <!-- <div slot="header">
          </div> -->
          <div class="main-content">
            <el-table :data="tableData" style="width: 100%"
              :header-row-style="{'color': '#ffffff','font-size':'17px'}"
              :header-cell-style="{background:'#64438D'}"
              :cell-style="function(){return 'font-weight: 700; color: black; '}"
              @row-click="handleRowClick"
            >
              <el-table-column type="expand">
            <template slot-scope="scope">
              <el-container>
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
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljcy_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.yyljcy_dataset;scope.row.show2=scope.row.yyljcy_dataset">
                              {{language.leaderboard_yyljcy}}
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_yyljpj_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.yyljpj_dataset;scope.row.show2=scope.row.yyljpj_dataset">
                              {{language.leaderboard_yyljpj}}
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_xxhq_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.xxhq_dataset;scope.row.show2=scope.row.xxhq_dataset">
                              {{language.leaderboard_xxhq}}
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_yysc_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.yysc_dataset;scope.row.show2=scope.row.yysc_dataset">
                              {{language.leaderboard_yysc}}
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_dhjh_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.dhjh_dataset;scope.row.show2=scope.row.dhjh_dataset">
                              {{language.leaderboard_dhjh}}
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_dyy_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.dyy_dataset;scope.row.show2=scope.row.dyy_dataset">
                              {{language.leaderboard_dyy}}
                            </el-button>
                          </el-tooltip>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="">
                          <el-tooltip class="item" effect="dark" :content="language.leaderboard_sxtl_hint" placement="top">
                            <el-button type="text" @click="scope.row.show1=scope.row.sxtl_dataset;scope.row.show2=scope.row.sxtl_dataset">
                              {{language.leaderboard_sxtl}}
                            </el-button>
                          </el-tooltip>
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
                            {{ i.score === null ? '' : i.score}}
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
                            {{ i.score === null ? '' : i.score }}
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-row>
                </el-main>
              </el-container>
            </template>
          </el-table-column>
              <!-- <el-table-column :label="language.leaderboard_rank" prop="rank"> </el-table-column> -->
              <el-table-column :label="language.leaderboard_model" prop="name"> </el-table-column>
              <!-- <el-table-column label="机构" prop="org"> </el-table-column> -->
              <!-- <el-table-column label="论文链接" prop="plink">
                <template slot-scope="scope">
                  <el-link :href="scope.row.plink">
                    <img src="https://z3.ax1x.com/2021/08/20/fOBmes.png" style="width:30px;height:30px;">
                  </el-link>
                </template>
              </el-table-column>
              <el-table-column label="代码链接" prop="clink">
                <template slot-scope="scope">
                  <el-link :href="scope.row.clink">
                    <img src="https://z3.ax1x.com/2021/08/20/fOBmes.png" style="width:30px;height:30px;">
                  </el-link>
                </template>
              </el-table-column> -->
              <el-table-column :label="language.leaderboard_codepaper" prop="plink" min-width="110">
                <template slot-scope="scope">
                  <el-link :href="scope.row.plink" :disabled="scope.row.plink==''">
                    <!-- <i class="el-icon-paperclip"></i> -->
                    <img :src="scope.row.plink==''?'https://z3.ax1x.com/2021/08/30/hYfZkV.png':'https://z3.ax1x.com/2021/08/20/fOBmes.png'" style="width:30px;height:30px;">
                  </el-link>
                  <el-link :href="scope.row.clink" :disabled="scope.row.clink==''">
                    <!-- <i class="el-icon-paperclip"></i> -->
                    <img :src="scope.row.clink==''?'https://z3.ax1x.com/2021/08/30/hYfZkV.png':'https://z3.ax1x.com/2021/08/20/fOBmes.png'" style="width:30px;height:30px;">
                  </el-link>
                </template>
              </el-table-column>
              <!-- <el-table-column label="识记能力" prop="sj"> </el-table-column>
              <el-table-column label="理解能力" prop="lj"> </el-table-column>
              <el-table-column label="检索能力" prop="js"> </el-table-column>
              <el-table-column label="数值计算能力" prop="szjs"> </el-table-column>
              <el-table-column label="生成能力" prop="sc"> </el-table-column>
              <el-table-column label="多语言能力" prop="dyy"> </el-table-column>
              <el-table-column label="智源指数" prop="zy"> </el-table-column> -->
              <el-table-column :label="language.leaderboard_submittime" prop="stime" min-width="160"> </el-table-column>
              <el-table-column :label="language.leaderboard_yyljcy" prop="yyljcy" min-width="150" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_yyljpj" prop="yyljpj" min-width="150" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_xxhq" prop="xxhq" min-width="140" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_yysc" prop="yysc" min-width="110" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_dhjh" prop="dhjh" min-width="110" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_dyy" prop="dyy" min-width="110" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_sxtl" prop="sxtl" min-width="110" align="right"> </el-table-column>
              <el-table-column :label="language.leaderboard_zyzs" prop="score" min-width="110" align="center"> </el-table-column>
              <el-table-column :label="language.user_operation" min-width="270" align="center">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">{{language.user_delete}}</el-button>
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleAdd(scope.$index, scope.row)">修改链接</el-button>
                  <el-button
                    size="mini"
                    type="primary"
                    :disabled="scope.row.public"
                    @click="handlePublic(scope.$index, scope.row)">{{scope.row.public ? "审核中..." : "申请公开"}}</el-button>
                </template>
              </el-table-column>
              <!-- <el-table-column label="总分" prop="score"> </el-table-column> -->
            </el-table>

            <el-dialog :visible.sync="visible" width="500px">
              <el-row class="input">
                <el-input
                  v-model="link.code"
                  :placeholder="language.user_code"
                  prefix-icon="el-icon-paperclip"
                  size="large"
                ></el-input>
              </el-row>

              <el-row class="input">
                <el-input
                  v-model="link.paper"
                  :placeholder="language.user_paper"
                  prefix-icon="el-icon-paperclip"
                  size="large"
                ></el-input>
              </el-row>
              <el-row class="input" style="vertical-align: bottom;">
                <el-button style="width: 100%" type="primary" @click="handleSubmit">
                  {{language.user_submit}}
                </el-button>
              </el-row>
            </el-dialog>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>

    <el-drawer
      :visible.sync="drawer"
      direction="rtl"
      size="30%"
      :with-header="false"
    >
      <div class="draw">
        <div class="draw-sub">
          <h1>{{language.leaderboard_model}}：{{drawerInfo.name}}</h1>
          <div class="draw-text">
            <!-- {{drawerInfo.link}} -->
            提交时间: {{drawerInfo.time}}
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
          <div class="draw-text">
            是否公开：{{drawerInfo.public ? language.yes : language.no}}
          </div>
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
          <div>
            {{drawerInfo.description}}
          </div>
          <hr class="draw-hr">
          <div>
            <el-link type="primary" :href="'/#/report?id='+drawerInfo.fileid">评测报告</el-link>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'first',
      tableData: [],
      tb: {},
      drawerInfo: {
      },
      drawer: false,
      visible: false,
      link: {
        paper: '',
        code: ''
      }
    }
  },
  props: {
    language: Object
  },
  mounted: function () {
    this.tableData = []
    this.$axios.post(config.API + config.getSubmitlist).then(res => {
      console.log(res)
      if (res.status === 200) {
        console.log(res)
        var t = res.data.record_list
        for (var i = 0; i < t.length; i++) {
          var r = t[i]
          var toAppend = {}
          if (r.is_evaluate) {
            toAppend = {
              rank: i + 1,
              name: r.模型名,
              org: 'Test',
              plink: r.论文链接,
              clink: r.代码链接,
              // sj_list: r.识记能力,
              // lj_list: r.理解能力,
              // js_list: r.检索能力,
              // szjs_list: r.数值计算能力,
              // sc_list: r.生成能力,
              // dyy_list: r.多语言能力,
              // sj: r.识记能力[0],
              // lj: r.理解能力[0],
              // js: r.检索能力[0],
              // szjs: r.数值计算能力[0],
              // sc: r.生成能力[0],
              // dyy: r.多语言能力[0],
              // zy_list: r.智源指数,
              // zy: r.智源指数[0],
              // sxtl: r.数学推理能力.ability_sum[0],
              // dyy: r.多语言能力.ability_sum[0],
              // dhjh: r.对话交互能力.ability_sum[0],
              // yysc: r.语言生成能力.ability_sum[0],
              // xxhq: r.信息获取及问答能力.ability_sum[0],
              // yyljpj: r['语言理解能力-篇章级'].ability_sum[0],
              // yyljcy: r['语言理解能力-词语级'].ability_sum[0],
              // score: r.智源指数[0],
              sxtl: r.数学推理能力[0] === null ? '0' : r.数学推理能力[0] + ' (' + r.数学推理能力[1] + ')',
              dyy: r.多语言能力[0] === null ? '0' : r.多语言能力[0] + ' (' + r.多语言能力[1] + ')',
              dhjh: r.对话交互能力[0] === null ? '0' : r.对话交互能力[0] + ' (' + r.对话交互能力[1] + ')',
              yysc: r.语言生成能力[0] === null ? '0' : r.语言生成能力[0] + ' (' + r.语言生成能力[1] + ')',
              xxhq: r.信息获取及问答能力[0] === null ? '0' : r.信息获取及问答能力[0] + ' (' + r.信息获取及问答能力[1] + ')',
              yyljpj: r['语言理解能力-篇章级'][0] === null ? '0' : r['语言理解能力-篇章级'][0] + ' (' + r['语言理解能力-篇章级'][1] + ')',
              yyljcy: r['语言理解能力-词句级'][0] === null ? '0' : r['语言理解能力-词句级'][0] + ' (' + r['语言理解能力-词句级'][1] + ')',
              paras: r.paras,
              sxtl_dataset: r.detail_score.数学推理能力.dataset_score_list,
              dyy_dataset: r.detail_score.多语言能力.dataset_score_list,
              dhjh_dataset: r.detail_score.对话交互能力.dataset_score_list,
              yysc_dataset: r.detail_score.语言生成能力.dataset_score_list,
              xxhq_dataset: r.detail_score.信息获取及问答能力.dataset_score_list,
              yyljpj_dataset: r.detail_score['语言理解能力-篇章级'].dataset_score_list,
              yyljcy_dataset: r.detail_score['语言理解能力-词句级'].dataset_score_list,
              show1: r.detail_score.多语言能力.dataset_score_list,
              show2: r.detail_score.多语言能力.dataset_score_list,
              // score: r.智源指数[0] + ' (' + r.智源指数[1] + ')',
              score: r.智源指数[1],
              sxtl_sub: r.数学推理能力[1],
              dyy_sub: r.多语言能力[1],
              dhjh_sub: r.对话交互能力[1],
              yysc_sub: r.语言生成能力[1],
              xxhq_sub: r.信息获取及问答能力[1],
              yyljpj_sub: r['语言理解能力-篇章级'][1],
              yyljcy_sub: r['语言理解能力-词句级'][1],
              score_sub: r.智源指数[1],
              sxtl_all: r.数学推理能力,
              dyy_all: r.多语言能力,
              dhjh_all: r.对话交互能力,
              yysc_all: r.语言生成能力,
              xxhq_all: r.信息获取及问答能力,
              yyljpj_all: r['语言理解能力-篇章级'],
              yyljcy_all: r['语言理解能力-词句级'],
              score_all: r.智源指数,
              time: r.commit_time,
              description: r.description,
              public: r.public,
              multiple: r.multiple,
              integrate: r.integrate,
              pre_train: r.pre_train,
              fileid: r.fileid,
              stime: r.simple_commit_time
            }
          } else {
            toAppend = {
              rank: i + 1,
              name: r.模型名,
              org: 'Test',
              plink: r.论文链接,
              clink: r.代码链接
            }
          }
          this.tableData.push(toAppend)
          console.log(toAppend)
        }
      }
    })
  },
  methods: {
    handleDelete (a, b) {
      let that = this
      console.log('delete', a, b.fileid)
      let formData = new FormData()
      formData.append('fileid', b.fileid)
      this.$axios.post(config.API + config.toDelete, formData).then(res => {
        console.log(res)
        if (res.status === 200) {
          console.log(res)
          if (res.data.re_code === '0') {
            if (that.tableData.length === 1) {
              that.tableData = []
            }
            that.tableData.splice(a, a)
          }
        }
      })
    },
    handleAdd (a, b) {
      this.visible = true
      this.tb = b
      console.log('add', a, b, this.tb)
    },
    handlePublic (a, b) {
      console.log('public', a, b.fileid, b)
      let formData = new FormData()
      formData.append('fileid', b.fileid)
      this.$axios.post(config.API + config.toCheck, formData).then(res => {
        if (res.status === 200) {
          console.log('public', res)
          location.reload()
        }
      })
    },
    handleSubmit (a, b) {
      this.visible = false
      let formData = new FormData()
      formData.append('type', 'paper')
      formData.append('paper_url', this.link.paper)
      formData.append('code_url', this.link.code)
      formData.append('fileid', this.tb.fileid)
      this.$axios.post(config.API + config.toEditLink, formData).then(res => {
        if (res.status === 200) {
          console.log('paper', res)
          location.reload()
        }
      })
      // formData.append('type', 'code')
      // formData.append('url', this.link.code)
      // formData.append('fileid', this.tb.fileid)
      // this.$axios.post(config.API + config.toEditLink, formData).then(res => {
      //   if (res.status === 200) {
      //     console.log('code', res)
      //     // location.reload()
      //   }
      // })
    },
    handleRowClick (row, column, event) {
      console.log(column)
      // this.drawerInfo.rank = row.rank
      // this.drawerInfo.name = row.name
      // this.drawerInfo.link = row.link
      // this.drawerInfo.date = row.date
      // this.drawerInfo.score = row.score
      // this.drawerInfo.model = row.model
      // this.drawerInfo.parameter = row.parameter
      // this.drawerInfo.more = row.more
      if (column.label !== '操作' && column.label !== this.language.leaderboard_codepaper) {
        this.drawerInfo = row
        this.drawer = true
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
.input{
  margin:30px;
}
.expand-up{
  color:#7857A1;
  font-weight: bold;
  text-align: center;
}
.expand-down{
  color:black;
  font-weight: bold;
  text-align: center;
}
</style>
