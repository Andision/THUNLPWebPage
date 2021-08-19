<template>
  <div style="margin-left: 100px;margin-right: 100px;">
    <h1 class="title">{{language.sjxz}}</h1>
    <div class="table">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        :cell-style="function(){return 'font-weight: 700; color: black; font-size: large;'}"
      >
        <el-table-column prop="name" :label="language.Name">
        </el-table-column>
        <el-table-column prop="download" :label="language.Download" width="150" align="center">
          <template slot-scope="scope">
            <div class="icon">
              <el-link icon="el-icon-download" :href="'/api/download_dataset?dataset_id='+scope.row.download" :underline="false"></el-link>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="more" :label="language.More+' '+language.Info" width="150" align="center">
          <template slot-scope="scope">
            <div class="icon">
              <el-link icon="el-icon-more" :href="'/#/more?id='+scope.row.more" :underline="false"></el-link>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="score" :label="language.Score" width="100" align="center">
        </el-table-column> -->
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
import config from '@/components/config.json'
export default {
  data () {
    return {
      tableData: [],
      currentPage: 1, // 当前页码
      pageSize: 10 // 每页的数据条数
    }
  },
  mounted: function () {
    // {
    //   name: 'The Corpus of Linguistic Acceptability',
    //   score: '7',
    //   download: '12345',
    //   more: '12345'
    // }
    this.$axios.get(config.API + config.getDataDownload).then(res => {
      // console.log(res.data.dataset_list)
      if (res.status === 200) {
        if (res.data.re_code === '0') {
          for (var i = 0; i < res.data.dataset_list.length; i++) {
            var t = res.data.dataset_list[i]
            // console.log(t)
            this.tableData.push({
              name: t.dataset_name,
              score: t.dataset_id,
              download: t.dataset_id,
              more: t.dataset_id
            })
          }
        }
      }
    })
  },
  props: {
    language: Object
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
