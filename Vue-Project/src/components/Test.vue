<template>
  <div class="all">
    <h1 class="title">提交记录</h1>
    <el-card class="main">
      <div slot="header">
      </div>
      <div class="main-content">
        <el-table :data="tableData" style="width: 100%"
          :header-row-style="{'color': '#ffffff',}"
          :header-cell-style="{background:'#64438D'}"
          cell-style="font-weight: 700; color: black;"
          @row-click="handleRowClick"
        >
          <el-table-column label="#" prop="rank"> </el-table-column>
          <el-table-column label="模型名" prop="name"> </el-table-column>
          <!-- <el-table-column label="机构" prop="org"> </el-table-column> -->
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
          <el-table-column label="识记能力" prop="sj"> </el-table-column>
          <el-table-column label="理解能力" prop="lj"> </el-table-column>
          <el-table-column label="检索能力" prop="js"> </el-table-column>
          <el-table-column label="数值计算能力" prop="szjs"> </el-table-column>
          <el-table-column label="生成能力" prop="sc"> </el-table-column>
          <el-table-column label="多语言能力" prop="dyy"> </el-table-column>
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
          <h1>{{drawerInfo.name}}</h1>
          <div>
            {{drawerInfo.link}}
            Date: {{drawerInfo.date}}
            <br>
            Score: {{drawerInfo.score}}
          </div>
        </div>
        <hr class="draw-hr">
        <div class="draw-sub">
          <h1>{{language.Model}}</h1>
          <div>
            {{drawerInfo.model}}
          </div>
        </div>
        <hr class="draw-hr">
        <div class="draw-sub">
          <h1>{{language.Parameter}}</h1>
          <div>
            {{drawerInfo.parameter}}
          </div>
        </div>
        <hr class="draw-hr">
        <div class="draw-sub">
          <h1>{{language.More}} {{language.Information}}</h1>
          <div>
            {{drawerInfo.more}}
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
      tableData: [
        {
          rank: 'Test',
          name: 'name',
          org: 'Test',
          plink: 'Test',
          clink: 'Test',
          sj: 'Test',
          lj: 'Test',
          js: 'Test',
          szjs: 'Test',
          sc: 'Test',
          dyy: 'Test'
        }
      ],
      drawerInfo: {
        rank: '',
        name: '',
        link: '',
        date: '',
        score: '',
        model: '',
        parameter: '',
        more: ''
      }
    }
  },
  props: {
    language: Object
  },
  mounted: function () {
    console.log('test', typeof this.language)
    // this.tableData = []
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
            sj: r.识记能力,
            lj: r.理解能力,
            js: r.检索能力,
            szjs: r.数值计算能力,
            sc: r.生成能力,
            dyy: r.多语言能力
          }
          this.tableData.push(toAppend)
          console.log(toAppend)
        }
      }
    })
  },
  methods: {
    handleRowClick (row, column, event) {
      console.log(row)
      this.drawerInfo.rank = row.rank
      this.drawerInfo.name = row.name
      this.drawerInfo.link = row.link
      this.drawerInfo.date = row.date
      this.drawerInfo.score = row.score
      this.drawerInfo.model = row.model
      this.drawerInfo.parameter = row.parameter
      this.drawerInfo.more = row.more
      this.drawer = true
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
