<template>
  <div class="all">
    <h1 class="title">{{language.user_submitRecord}}</h1>
    <el-card class="main">
      <!-- <div slot="header">
      </div> -->
      <div class="main-content">
        <el-table :data="tableData" style="width: 100%"
          :header-row-style="{'color': '#ffffff','font-size':'17px'}"
          :header-cell-style="{background:'#64438D'}"
          :cell-style="function(){return 'font-weight: 700; color: black; text-align:right;'}"
          @row-click="handleRowClick"
        >
          <el-table-column :label="language.leaderboard_rank" prop="rank"> </el-table-column>
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
          <el-table-column :label="language.leaderboard_codepaper" prop="plink">
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
          <el-table-column :label="language.leaderboard_submittime" prop="stime"> </el-table-column>
          <el-table-column :label="language.leaderboard_yyljcy" prop="yyljcy"> </el-table-column>
          <el-table-column :label="language.leaderboard_yyljpj" prop="yyljpj"> </el-table-column>
          <el-table-column :label="language.leaderboard_xxhq" prop="xxhq"> </el-table-column>
          <el-table-column :label="language.leaderboard_yysc" prop="yysc"> </el-table-column>
          <el-table-column :label="language.leaderboard_dhjh" prop="dhjh"> </el-table-column>
          <el-table-column :label="language.leaderboard_dyy" prop="dyy"> </el-table-column>
          <el-table-column :label="language.leaderboard_sxtl" prop="sxtl"> </el-table-column>
          <el-table-column :label="language.leaderboard_zyzs" prop="score"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column label="总分" prop="score"> </el-table-column> -->
        </el-table>
      </div>
    </el-card>

    <el-drawer
      :visible.sync="drawer"
      direction="rtl"
      size="30%"
      :with-header="false"
    >
      <div class="draw">
        <div class="draw-sub">
          <h1>{{language.leaderboard_model}}：{{drawerInfo.name}}</h1>
          <div>
            <!-- {{drawerInfo.link}} -->
            提交时间: {{drawerInfo.time}}
            <!-- <br>
            Score: {{drawerInfo.score}} -->
          </div>
          <div>
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
          <div>
            是否公开：{{drawerInfo.public ? language.yes : language.no}}
          </div>
          <div>
            是否使用预训练模型：{{drawerInfo.pre_train ? language.yes : language.no}}
          </div>
          <div>
            是否使用集成学习提升模型表现：{{drawerInfo.integrate ? language.yes : language.no}}
          </div>
          <div>
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
      tableData: [],
      drawerInfo: {
      },
      drawer: false
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
          var toAppend = {
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
            sxtl: r.数学推理能力[0] === null ? '' : r.数学推理能力[0] + ' (' + r.数学推理能力[1] + ')',
            dyy: r.多语言能力[0] === null ? '' : r.多语言能力[0] + ' (' + r.多语言能力[1] + ')',
            dhjh: r.对话交互能力[0] === null ? '' : r.对话交互能力[0] + ' (' + r.对话交互能力[1] + ')',
            yysc: r.语言生成能力[0] === null ? '' : r.语言生成能力[0] + ' (' + r.语言生成能力[1] + ')',
            xxhq: r.信息获取及问答能力[0] === null ? '' : r.信息获取及问答能力[0] + ' (' + r.信息获取及问答能力[1] + ')',
            yyljpj: r['语言理解能力-篇章级'][0] === null ? '' : r['语言理解能力-篇章级'][0] + ' (' + r['语言理解能力-篇章级'][1] + ')',
            yyljcy: r['语言理解能力-词句级'][0] === null ? '' : r['语言理解能力-词句级'][0] + ' (' + r['语言理解能力-词句级'][1] + ')',
            paras: r.paras,
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
            that.tableData.splice(a, a)
          }
        }
      })
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
</style>
