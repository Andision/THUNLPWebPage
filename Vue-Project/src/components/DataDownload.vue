<template>
  <div>
    <h1 class="title">{{language.sjxz}}</h1>
    <div class="table">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        cell-style="font-weight: bold;"
      >
        <el-table-column prop="name" :label="language.Name">
        </el-table-column>
        <el-table-column prop="download" :label="language.Download" width="150" align="center">
          <template slot-scope="scope">
            <div class="icon">
              <el-link icon="el-icon-download" :href="scope.row.download" :underline="false"></el-link>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="more" :label="language.More+' '+language.Info" width="150" align="center">
          <template slot-scope="scope">
            <div class="icon">
              <el-link icon="el-icon-more" :href="scope.row.more" :underline="false"></el-link>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="score" :label="language.Score" width="100" align="center">
        </el-table-column>
      </el-table>

      <div class="block" style="margin-top:15px;">
        <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10,20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import en from '@/components/en.json'
export default {
  data () {
    return {
      tableData: [
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '1',
          download: '12345',
          more: '12345'
        },
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '2',
          download: '12345',
          more: '12345'
        },
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '3',
          download: '12345',
          more: '12345'
        },
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '4',
          download: '12345',
          more: '12345'
        },
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '5',
          download: '12345',
          more: '12345'
        },
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '6',
          download: '12345',
          more: '12345'
        },
        {
          name: 'The Corpus of Linguistic Acceptability',
          score: '7',
          download: '12345',
          more: '12345'
        }
      ],
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页的数据条数
      language: en
    }
  },
  methods: {
    // 每页条数改变时触发 选择一页显示多少行
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>
<style scoped>
.icon{
  font-weight: bold;
}
.title{
  text-align: left;
  margin: 50px;
  color: #64438D;
  font-size: 40px;
}
.table{
  margin: 50px;
}
</style>
