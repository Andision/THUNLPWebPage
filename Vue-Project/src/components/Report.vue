<template>
  <div class="all">
    <div class="all-title">
      测评报告
    </div>
    <el-collapse accordion>
      <el-collapse-item class="section" v-for="(key,index) in tableData" :key="index">
        <template slot="title">
          <div class="section-title" :class="key.err_msg!=null?'title-red':'title-green'">
            {{key.ability}}
          </div>
        </template>
        <div class="section-success" v-if="key.err_msg==null">
          <div class="section-content-title">
            正常处理
          </div>
          <div class="section-content">
            <p>
              数据集名称匹配成功：{{key.ability+' - '+key.task+' - '+key.dataset}}
            </p>
            <p>
              运行提交结果测评脚本...
            </p>
            <p v-if="key.score!=-1">
              测评脚本运行成功！
            </p>
            <br>
            <p>
              指标结果
            </p>

            <p v-for="(key1,index1) in key.index" :key="index1">
              {{index1}} : {{key1}}
            </p>
          </div>
        </div>
        <div class="section-fail" v-if="key.err_msg!=null">
          <div class="section-content-title">
            错误显示
          </div>
          <div class="section-content">
            <pre>
              {{key.err_msg}}
            </pre>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item class="section" v-for="(key,index) in err_list" :key="index+'!'">
        <template slot="title">
          <div class="section-title title-red">
            {{key}}
          </div>
        </template>
        <div class="section-fail">
          <div class="section-content-title">
            错误显示
          </div>
          <div class="section-content">
            <p>
              数据集名称匹配失败
            </p>
            <!-- <p>
              运行提交结果测评脚本...
            </p>
            <p v-if="key.score!=-1">
              测评脚本运行成功！
            </p> -->
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  data () {
    return {
      id: '',
      tableData: [],
      err_list: []
    }
  },
  props: {
    language: Object
  },
  mounted: function () {
    this.id = this.$route.query.id
    if (config.debug === 'true') {
      console.log(this.id)
    }
    this.tableData = []
    let formData = new FormData()
    formData.append('fileid', this.id)
    this.$axios.post(config.API + config.getEvalReport, formData).then(res => {
      if (config.debug === 'true') {
        console.log(res)
      }
      if (res.status === 200) {
        if (config.debug === 'true') {
          console.log(res.data.rating_list)
        }
        this.tableData = res.data.rating_list
        this.err_list = res.data.filename_err
      }
    })
  }
}
</script>

<style scoped>
pre{
  white-space: pre;
}
.all{
  margin: 50px;
}
.all-title{
  text-align: left;
  color: #64438D;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
}
.section-title{
  font-size: x-large;
  color: black;
  font-weight: bolder;
  margin-left: 50px;
}
.section{
  text-align: left;
}
.section-success{
  color: green;
  margin: 50px;
}
.section-fail{
  color: red;
  margin: 50px;
}
.title-red{
  color: red;
}
.title-green{
  color: green;
}
.section-content-title{
  font-size: x-large;
}
.section-content{
  font-size: larger;
  white-space:normal;
  word-break: break-all;
}
</style>
