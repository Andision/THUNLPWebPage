<template>
  <div class="all">
    <div class="title">
      <div class="title-title">
        {{show.title}}
      </div>
      <div class="title-sub">
        <div class="title-sub" style="display: inline;">
          {{show.label}}
        </div>
        <div class="title-sub" style="display: inline;">
          难度
        </div>
        <div class="title-color" style="display: inline;">
          {{show.hard}}
        </div>
        <div class="title-sub" style="display: inline;">
          信度
        </div>
        <div class="title-color" style="display: inline;">
          {{show.reliability}}
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <el-link class="author" type="primary" :href="item.link" v-for="(item,index) in show.author" :key="index">
          {{item.name}}
        </el-link>
      </div>
      <div>
        {{show.org}}
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_intro}}
          <i class="el-icon-question"></i>
        </div>
        <div class="section-content">
          {{show.intr}}
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_paper}}
          <i class="el-icon-document"></i>
        </div>
        <div class="section-content">
          {{show.paper}}
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_ref}}
          <i class="el-icon-document"></i>
        </div>
        <div class="section-content section-color">
          {{show.ref}}
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_size}}
          <i class="el-icon-s-data"></i>
        </div>
        <div class="section-content">
          {{show.size}}
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_download}}
          <i class="el-icon-download"></i>
        </div>
        <div class="section-content">
          {{show.download}}
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_form}}
          <i class="el-icon-tickets"></i>
        </div>
        <div class="section-content">
          {{show.form}}
        </div>
      </div>

      <div class="content-section">
        <div class="section-title">
          {{language.more_sample}}
          <i class="el-icon-edit"></i>
        </div>
        <pre class="section-content section-color" v-html="show.sample">
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import en from '@/components/en.json'
export default {
  data () {
    return {
      language: en,
      show: {
        title: '金融领域关系抽取数据集FinRE',
        label: '识记能力 | 开放域问答',
        hard: '中',
        reliability: '高',
        author: [
          {
            name: '李自然',
            link: ''
          },
          {
            name: '丁宁',
            link: ''
          },
          {
            name: '刘知远',
            link: ''
          }
        ],
        org: '清华大学',
        intr: 'FinRE是一个人工精标注的财经金融领域的数据集,该数据集从新浪财经新闻数据中抽取了2647篇文章进行标注,在训练集、验证集和测试集中分别包含了13486, 3727,和1489个句子,为UTF-8纯文本格式。本数据集中的的命名实体为商业公司,在关系上设计了除NA类之外的44个金融领域的关系类别(双向),包含拥有、持股、竞争、收购、交易、合作、、减持等财经金融领域的特有关系类别。',
        paper: '访问链接阅读论文 https://www.aclweb.org/anthology/P19-1430.pdf',
        ref: '@inproceedings{li2019chinese, title={Chinese relation extraction withmulti-grained information and external linguistic knowledge), author={Li, Ziranand Ding, Ning and Liu, Zhiyuan and Zheng, Haitao and Shen, Ying},booktitle={Proceedings of the 57th Annual Meeting of the Association forComputational Linguistics}, pages={4377--4386), year={2019}}',
        size: '训练集7454条句子,验证集1489条句子,测试集3727条句子。',
        download: '由此链接下载数据集(训练集、验证集、测试集文本)',
        form: '每条数据包含编号(id),文本(text),关系标签序号(label),关系标签内容(label_desc),头实体(head)以及尾实体(tail)',
        sample: '{<br>    "id": 2,<br>    "text": "东方航空AH股临时停牌传将与上航合并”,<br>    "label": 19, //若为负例,此处为0<br>    "label_desc": "合并",//若为负例,此处为"N/A"<br>    "head": {<br>        "mention": "东方航空", //实体提及内容<br>        "start": 0, //实体提及在句子中开始的字序号<br>        "end": 4 //实体提及在句子中结束的字序号<br>},<br>    "tail": {<br>        "mention": "EM",<br>        "start": 14,<br>        "end": 16<br>    }<br>}<br>'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.title{
  margin: 50px;
}
.title-title{
  color: #64438D;
  font-size: 50px;
  font-weight: bolder;
}
.title-sub{
  font-size: xx-large;
  margin: 40px;
  font-weight: bold;
}
.title-color{
  color: #64438D;
}
.content{
  width: 60%;
  margin: auto;
  text-align: left;
}
.content-section{
  margin-top: 50px;
  margin-bottom: 70px;
}
.section-title{
  text-align: left;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: larger;
}
.section-content{
  letter-spacing: 0px;
}
.section-color{
  background-color: #F5F4FE;
  padding: 50px;
}
.author{
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
