<template>
  <div class="all">
    <el-table
      :data="tableData"
      class="table"
      :header-cell-style="{ background: '#64438D', color: 'white' }"
      @row-click="handleRowClick"
    >
      <el-table-column prop="name" :label="language.Name"> </el-table-column>
      <el-table-column prop="date" :label="language.Date" width="200">
      </el-table-column>
      <el-table-column prop="time" :label="language.Time" width="200">
      </el-table-column>
      <el-table-column prop="score" :label="language.Score" width="200">
      </el-table-column>
    </el-table>

    <el-drawer
      :visible.sync="drawer"
      direction="rtl"
      size="30%"
      :with-header="false"
    >
      <div class="draw">
        <div class="draw-sub">
          <h1>#{{drawerInfo.rank}} {{drawerInfo.name}}</h1>
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
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
      drawer: false,
      drawerInfo: {
        rank: '',
        name: '',
        link: '',
        date: '',
        score: '',
        model: '',
        parameter: '',
        more: ''
      },
      tableData: []
      // tableData: [
      //   {
      //     rank: '1',
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5',
      //     link: 'LINK',
      //     model: 'xxxxxxxxxxx',
      //     parameter: 'xxxxxxxxxxxxx',
      //     more: 'xxxxxxxxxxxxxxx'
      //   },
      //   {
      //     rank: '2',
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5'
      //   },
      //   {
      //     rank: '3',
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5'
      //   },
      //   {
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5'
      //   },
      //   {
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5'
      //   },
      //   {
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5'
      //   },
      //   {
      //     date: '19-02-01',
      //     name: 'The Corpus of Linguistic Acceptability',
      //     time: '00:30',
      //     score: '90.5'
      //   }
      // ]
    }
  },
  methods: {
    handleRowClick (row, column, event) {
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

<style scoped>
.all {
  margin: 100px;
}
.table {
  background-color: aqua;
  font-weight: bold;
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
