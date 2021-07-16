<template>
  <div class="all">
    <el-collapse accordion>
      <el-collapse-item class="section" v-for="(key,index) in tableData" :key="index">
        <template slot="title">
          <div class="section-title">
            {{key.title}}
          </div>
        </template>
        <div class="section-content" v-for="(key1,index1) in key.details" :key="index1">
          {{key1}}
        </div>
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
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
      tableData: [{
        title: '如何参与智源指数评测？',
        detail: '在智源指数框架介绍页面一键下载所有数据集，或在数据下载页面下载某个特定数据集<br>生成测试集的预测结果文件。预测结果文件格式和训练集相同。<br>将预测结果文件按照“能力-任务-数据集”的文件夹结构组织（在智源指数框架介绍页面一键下载的数据集已经按照该结构整理），压缩成zip格式。登录个人账号后即可在参与评测页面提交。',
        details: [
          '在智源指数框架介绍页面一键下载所有数据集，或在数据下载页面下载某个特定数据集；',
          '生成测试集的预测结果文件。预测结果文件格式和训练集相同；',
          '将预测结果文件按照“能力-任务-数据集”的文件夹结构组织（在智源指数框架介绍页面一键下载的数据集已经按照该结构整理），压缩成zip格式。登录个人账号后即可在参与评测页面提交。'
        ]
      },
      {
        title: '参与评测需要遵守哪些规范？',
        detail: '我们禁止任何形式的在模型训练和提交结果中使用测试集标签信息，包括通过自己人工标注测试集标签。<br>我们鼓励评测参与者分享论文/技术报告/模型代码，共同推进自然语言处理社区积极健康发展。',
        details: [
          '我们禁止任何形式的在模型训练和提交结果中使用测试集标签信息，包括通过自己人工标注测试集标签。',
          '我们鼓励评测参与者分享论文/技术报告/模型代码，共同推进自然语言处理社区积极健康发展。'
        ]
      },
      {
        title: '如何下载获得数据集',
        detail: '在智源指数任务框架介绍页面可以一键下载所有数据集；在数据集列表可以下载某个特定数据集',
        details: ['在智源指数任务框架介绍页面可以一键下载所有数据集；', '在数据集列表可以下载某个特定数据集。']
      },
      {
        title: '智源指数的数据使用许可是什么？',
        detail: '智源指数提供的数据仅供个人研究用途使用，禁止商业用途使用。',
        details: ['智源指数提供的数据仅供个人研究用途使用，禁止商业用途使用。']
      },
      {
        title: '如何反馈对智源指数的建议？',
        detail: '智源指数体系和评测平台仍在不断建设和完善中，未来我们会在智源社区开放用户反馈意见论坛。',
        details: ['智源指数体系和评测平台仍在不断建设和完善中，未来我们会在智源社区开放用户反馈意见论坛。']
      }]
    }
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
