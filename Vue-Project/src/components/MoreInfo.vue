<template>
  <div class="all">
    <div class="title">
      <div class="title-title">
        {{show.title}}
      </div>
      <div class="title-sub">
        {{show.ability}} | {{show.task}}
      </div>
    </div>
    <el-card style="width:80%; margin: auto; margin-bottom: 50px;">
      <div class="content">
        <div class="content-section">
          <!-- <el-link class="author" type="primary" :href="item.link" v-for="(item,index) in show.author" :key="index">
            {{item.name}}
          </el-link> -->
           <div class="section-title"  v-if="show.author!=theNull">
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
          <pre class="section-content section-color bg-color" v-html="show.sample">
          </pre>
        </div>

        <div class="content-section" v-if="show.form!=theNull">
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
    </el-card>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  data () {
    return {
      id: '',
      theNull: undefined,
      show: {
        title: '',
        author: [
          {
            name: '',
            link: ''
          },
          {
            name: '',
            link: ''
          },
          {
            name: '',
            link: ''
          }
        ],
        org: '',
        intr: '',
        paper: '',
        ref: '',
        size: '',
        download: '',
        form: '',
        sample: ''
      },
      testshow: {
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
  props: {
    language: Object
  },
  methods: {},
  mounted: function () {
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
    // this.show = this.testshow
  }
}
</script>
<style>
#moreintro pre{
  white-space:nowrap;
}
pre{
  white-space: normal;
  /* font-weight: bold; */
  font-family: "Microsoft YaHei","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.bg-color{
  background-color: #eceaff;
}
</style>
<style scoped>
.all{
  /* font-weight: bold; */
  margin: auto;
}
.title{
  margin-top: 100px;
  margin-bottom: 100px;
}
.title-title{
  color: #64438D;
  font-size: 60px;
  font-weight: 1000;
}
.title-sub{
  font-size: xx-large;
  margin: 40px;
  font-weight: bold;
  color: #64438D;
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
  font-size: 35px;
}
.section-content{
  letter-spacing: 0px;
  font-size: 25px;
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
</style>
