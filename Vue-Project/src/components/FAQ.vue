<template>
  <div class="all">
    <el-collapse v-model="activeName">
      <el-collapse-item class="section" v-for="(key,index) in tableData" :key="index" name="1">
        <template slot="title">
          <div class="section-title">
            {{key.title}}
          </div>
        </template>
        <div class="section-content" v-for="(key1,index1) in key.details" :key="index1">
          {{key1}}
        </div>
        <pre class="section-content" v-for="(key2,index2) in key.pre" :key="index2" v-html="key2">
        </pre>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-table
      :data="tableData"
      :show-header="false"
      cell-style="font-weight: bolder;"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <div v-html="props.row.detail">
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="" prop="title" class="title"> </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
export default {
  props: {
    language: Object
  },
  data () {
    return {
      tableData: [],
      activeName: ['1']
    }
  },
  mounted: function () {
    this.tableData = this.language.faq_content
    // for (var i = 0; i < this.tableData.length; i++) {
    //   this.activeName.push(i)
    // }
  }
}
</script>

<style scoped>
.all {
  margin: 100px;
}
.section-title{
  font-size: large;
  color: black;
  margin-left: 50px;
  font-weight: bold;
}
.section-content{
  text-align: left;
  color: black;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  font-size: larger;
}
/* .table {
  font-weight: bold;
}
.draw {
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.draw-sub {
  margin-top: 50px;
}

.draw-sub h1 {
  color: #7857a1;
}
.draw-hr {
  margin-top: 50px;
} */
</style>
