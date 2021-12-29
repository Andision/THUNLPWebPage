<template>
  <div class="all">
    <h1 class="title">审核列表</h1>
    <el-tabs v-model="activeName" class="main">
      <el-card>
        <!-- <div slot="header">
        </div> -->
        <div class="main-content">
          <el-table :data="tableData" style="width: 100%"
            :header-row-style="{'color': '#ffffff','font-size':'17px'}"
            :header-cell-style="{background:'#64438D'}"
            :cell-style="function(){return 'font-weight: 700; color: black; '}"
            @row-click="handleRowClick"
            stripe
          >
            <el-table-column label="" min-width="50" align="left">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.multiclick"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column :label="language.leaderboard_model" prop="name"> </el-table-column>
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
            <el-table-column :label="language.leaderboard_submittime" prop="stime" min-width="160"> </el-table-column>
            <el-table-column label="Organization" prop="org" min-width="100" align="center"> </el-table-column>
            <el-table-column label="Description" prop="description" min-width="150" align="center"> </el-table-column>
            <!-- <el-table-column :label="language.leaderboard_xxhq" prop="xxhq" min-width="140" align="right"> </el-table-column>
            <el-table-column :label="language.leaderboard_yysc" prop="yysc" min-width="110" align="right"> </el-table-column>
            <el-table-column :label="language.leaderboard_dhjh" prop="dhjh" min-width="110" align="right"> </el-table-column>
            <el-table-column :label="language.leaderboard_dyy" prop="dyy" min-width="110" align="right"> </el-table-column>
            <el-table-column :label="language.leaderboard_sxtl" prop="sxtl" min-width="110" align="right"> </el-table-column>
            <el-table-column :label="language.leaderboard_zyzs" prop="score" min-width="110" align="center"> </el-table-column> -->
            <el-table-column :label="language.user_operation" min-width="150" align="center">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="success"
                  @click="handleYes(scope.$index, scope.row)">通过</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleNo(scope.$index, scope.row)">驳回</el-button>
              </template>
            </el-table-column>
            <el-table-column label="驳回理由" min-width="150" align="center">
              <template slot-scope="scope">
                <el-input v-model="scope.row.reason" placeholder="请输入内容"></el-input>
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
    this.$axios.post(config.API + config.getChecklist).then(res => {
      if (config.debug === 'true') {
        console.log(res)
      }
      if (res.status === 200) {
        var t = res.data.check_list
        for (var i = 0; i < t.length; i++) {
          var r = t[i]
          var toAppend = {
            name: r.modelname,
            org: r.institution,
            plink: r.paper_url,
            clink: r.code_url,
            paras: r.paras,
            time: r.commit_time,
            description: r.description,
            public: r.public,
            multiple: r.multiple,
            integrate: r.integrate,
            pre_train: r.pre_train,
            fileid: r.fileid,
            stime: r.commit_time,
            reason: '',
            multiclick: false
          }
          this.tableData.push(toAppend)
          if (config.debug === 'true') {
            console.log(toAppend)
          }
        }
      }
    })
  },
  methods: {
    handleYes (a, b) {
      let that = this
      if (config.debug === 'true') {
        console.log('YES', a, b.fileid)
      }
      let formData = new FormData()
      formData.append('fileid', b.fileid)
      formData.append('flag', 1)
      formData.append('message', b.reason)
      this.$axios.post(config.API + config.toSubmitCheck, formData).then(res => {
        if (config.debug === 'true') {
          console.log(res)
        }
        if (res.status === 200) {
          if (that.tableData.length === 1) {
            that.tableData = []
          }
          that.tableData.splice(a, a)
          location.reload()
        }
      })
    },
    handleNo (a, b) {
      let that = this
      if (config.debug === 'true') {
        console.log('NO', a, b.fileid)
      }
      let formData = new FormData()
      formData.append('fileid', b.fileid)
      formData.append('flag', 0)
      formData.append('message', b.reason)
      this.$axios.post(config.API + config.toSubmitCheck, formData).then(res => {
        if (config.debug === 'true') {
          console.log(res)
        }
        if (res.status === 200) {
          if (that.tableData.length === 1) {
            that.tableData = []
          }
          that.tableData.splice(a, a)
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
          if (config.debug === 'true') {
            console.log('paper', res)
          }
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
      if (config.debug === 'true') {
        console.log(column)
      }
      // this.drawerInfo.rank = row.rank
      // this.drawerInfo.name = row.name
      // this.drawerInfo.link = row.link
      // this.drawerInfo.date = row.date
      // this.drawerInfo.score = row.score
      // this.drawerInfo.model = row.model
      // this.drawerInfo.parameter = row.parameter
      // this.drawerInfo.more = row.more
      if (column.label !== '操作' && column.label !== this.language.leaderboard_codepaper && column.label !== '驳回理由' && column.label !== '') {
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
