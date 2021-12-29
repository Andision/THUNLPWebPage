<template>
  <div class="all" style="background-color:#f4f7fe; min-height:1000px;">
    <div class="title">
      <el-row style="width:80%; margin: auto; ">
        <el-col :span="16" style="text-align:left; margin-left: 12%;">
          <div class="title-title">
            {{show.title}}
          </div>
          <div class="title-sub">
            {{show.ability}} | {{show.task}}
          </div>
        </el-col>
        <el-col :span="84" style="text-align:right; margin-top:95px;">
          <el-row>
            <el-button type="primary" @click="handleDownload()">{{language.dataset_download}}</el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- <hr style="margin:0; padding-bottom:10px; background-color:#f4f7fe;"/> -->
    <el-card style="width:80%; margin:auto;">
      <div style="min-height:50%;">
        <el-tabs class="tab-all" v-model="activeName" stretch>
          <el-tab-pane :label="language.dataset_intro" name="first">
            <div style="margin: auto; margin-bottom: 50px; padding-top: 20px;">
              <div class="content">
                <div class="content-section" v-if="show.intr!=theNull">
                  <div class="section-title">
                    {{language.more_intro}}
                    <i class="el-icon-question"></i>
                  </div>
                  <pre class="section-content" v-html="show.intr">
                  </pre>
                  <!-- <div class="section-content">
                    {{show.intr}}
                  </div> -->
                </div>
                <div class="content-section">
                  <!-- <el-link class="author" type="primary" :href="item.link" v-for="(item,index) in show.author" :key="index">
                    {{item.name}}
                  </el-link> -->
                  <div class="section-title"  v-show="show.author!=theNull">
                    {{language.moreinfo_author}}
                    <i class="el-icon-s-custom"></i>
                  </div>
                  <pre class="section-content" v-html="show.author">
                  </pre>
                </div>
                <div class="content-section">
                  <div class="section-title"  v-if="show.org!=theNull">
                    {{language.moreinfo_org}}
                    <i class="el-icon-s-home"></i>
                  </div>
                  <pre class="section-content" v-html="show.org">
                  </pre>
                </div>

                <div class="content-section" v-if="show.paper!=theNull">
                  <div class="section-title">
                    {{language.more_paper}}
                    <i class="el-icon-document"></i>
                  </div>
                  <pre class="section-content" v-html="show.paper">
                  </pre>
                  <!-- <div class="section-content">
                    {{show.paper}}
                  </div> -->
                </div>

                <div class="content-section" v-if="show.ref!=theNull">
                  <div class="section-title">
                    {{language.more_ref}}
                    <i class="el-icon-document"></i>
                  </div>
                  <pre class="section-content section-color bg-color" v-html="show.ref" id="moreintro">
                  </pre>
                  <!-- <div class="section-content section-color">
                    {{show.ref}}
                  </div> -->
                </div>

                <div class="content-section" v-if="show.size!=theNull">
                  <div class="section-title">
                    {{language.more_size}}
                    <i class="el-icon-s-data"></i>
                  </div>
                  <pre class="section-content" v-html="show.size">
                  </pre>
                  <!-- <div class="section-content">
                    {{show.size}}
                  </div> -->
                </div>

                <div class="content-section" v-if="show.download!=theNull">
                  <div class="section-title">
                    {{language.more_download}}
                    <i class="el-icon-download"></i>
                  </div>
                  <pre class="section-content" v-html="show.download">
                  </pre>
                  <!-- <div class="section-content">
                    {{show.download}}
                  </div> -->
                </div>

                <div class="content-section" v-if="show.form!=theNull">
                  <div class="section-title">
                    {{language.more_form}}
                    <i class="el-icon-tickets"></i>
                  </div>
                  <pre class="section-content" v-html="show.form">
                  </pre>
                  <!-- <div class="section-content">
                    {{show.form}}
                  </div> -->
                </div>

                <div class="content-section" v-if="show.sample!=theNull">
                  <div class="section-title">
                    {{language.more_sample}}
                    <i class="el-icon-edit"></i>
                  </div>
                  <pre class="section-content section-color bg-color" v-html="show.sample" id="myref">
                  </pre>
                </div>

                <div class="content-section" v-if="show.evaluate!=theNull">
                  <div class="section-title">
                    {{language.more_usage}}
                    <i class="el-icon-tickets"></i>
                  </div>
                  <pre class="section-content" v-html="show.evaluate">
                  </pre>
                  <!-- <div class="section-content">
                    {{show.form}}
                  </div> -->
                </div>

              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="show.title+' '+language.dataset_rank" name="second">
            <div class="content-board" style="margin-top:70px;margin-bottom:70px">
              <el-table :data="tableData" style="width: 100%"
                :header-row-style="{'color': '#ffffff','font-size':'17px','text-align':'center'}"
                :header-cell-style="{'background':'#64438D'}"
                :cell-style="cellStyle"
                @row-click="handleRowClick"
              >
                <el-table-column :label="language.leaderboard_rank" prop="rank" align="center" min-width="60"> </el-table-column>
                <el-table-column :label="language.leaderboard_model" prop="name" align="center" min-width="100"> </el-table-column>
                <el-table-column :label="language.leaderboard_org" prop="org" align="center" min-width="120"> </el-table-column>
                <el-table-column :label="language.leaderboard_codepaper" prop="plink" align="center" min-width="160">
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
                <el-table-column :label="language.leaderboard_submittime" prop="stime" align="center" min-width="120"> </el-table-column>
                <el-table-column v-for="(i,index) in newTitle" :label="i" :prop="i" align="center" :key="index"> </el-table-column>
                <el-table-column label="Score" prop="score" align="center" v-if="newTitle.length > 1"> </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  data () {
    return {
      Gid: '',
      Gname: '',
      newTitle: [],
      activeName: 'first',
      id: '',
      theNull: undefined,
      tableData: [],
      tapp: {},
      show: {},
      kb: '　'
    }
  },
  props: {
    language: Object,
    app: Object
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
      if (column.label !== this.language.leaderboard_codepaper) {
        this.drawerInfo = row
        this.drawer = true
      }
    },
    handleDownload () {
      console.log('DID')
      if (this.tapp.isLogin) {
        this.$axios.get(config.API + config.getDownloadLink + '?dataset_id=' + this.id).then(res => {
          console.log(res)
          if (res.status === 200) {
            console.log('link', res.data.oss_url)
            window.open(res.data.oss_url)
          }
        })
      } else {
        this.tapp.toLogin()
      }
    }
  },
  mounted: function () {
    this.tapp = this.app
    this.id = this.$route.query.id
    console.log(this.id, this.language.language)
    var useURL = ''
    if (this.language.language === 'en') {
      useURL = config.getMoreInfoEN
    } else {
      useURL = config.getMoreInfoZH
    }
    this.$axios.get(config.API + useURL + '?dataset_id=' + this.id).then(res => {
      console.log(res)
      if (res.status === 200) {
        var t = res.data
        this.show = t
        // this.show.title = t.数据集
        // this.show.org = t.单位
        // this.show.intr = t.简介
        // this.show.paper = t.论文
        // this.show.ref = t.论文引用
        // this.show.size = t.数据规模
        // this.show.download = t.数据下载
        // this.show.form = t.数据集格式描述
        // this.show.sample = t.数据样例
      }
    })

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
            stime: r.commit_time,
            public: r.public,
            multiple: r.multiple,
            integrate: r.integrate,
            pre_train: r.pre_train,
            time: r.simple_commit_time,
            paras: r.paras,
            description: r.description,
            score: r.score
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
  }
}
</script>
<style>
#moreintro pre{
  white-space:nowrap;
}
#myref pre{
  white-space:nowrap;
}
pre{
  white-space: normal;
  /* font-weight: bold; */
  font-family: "Microsoft YaHei","PingFang SC","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","Hiragino Sans GB","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.bg-color{
  background-color: #eceaff;
}
#tab-first{
  /* background-color: aqua; */
  font-size: 25px;
  font-weight: bold;
  height: 50px;
}
#tab-second{
  /* background-color: aqua; */
  font-size: 25px;
  font-weight: bold;
  height: 50px;
}
</style>
<style scoped>
.all{
  /* font-weight: bold; */
  margin: auto;
}
.title{
  padding-top: 100px;
  padding-bottom: 90px;
}
.title-org{
  font-size: large;
  font-weight: bold;
  color: #64438D;
}
.title-title{
  color: #64438D;
  font-size: 60px;
  font-weight: 1000;
}
.title-sub{
  font-size: xx-large;
  font-weight: bold;
  color: #64438D;
}
.title-color{
  color: #64438D;
}
.content{
  width: 80%;
  margin: auto;
  text-align: left;
}
.content-section{
  margin-top: 50px;
  margin-bottom: 50px;
}
.section-title{
  text-align: left;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 25px;
}
.section-content{
  letter-spacing: 0px;
  font-size: 20px;
}
.section-color{
  padding: 50px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
}
.author{
  margin-right: 10px;
  margin-bottom: 10px;
}
code {
  white-space: pre-wrap;
}

.tab-all{
  width: 80%;
  margin: auto;
}

.content-board{
  width: 100%;
  margin: auto;
}
</style>
