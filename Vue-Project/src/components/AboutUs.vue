<template>
  <div class="all">
    <div class="title">
      <div class="title-title">
        {{language.about_title}}
      </div>
    </div>
    <el-card style="width:80%; margin: auto; margin-bottom: 50px;">
      <div class="content">
        <div class="content-section">
          <!-- <div class="section-title">
            {{language.about_title1}}
          </div> -->
          <div class="section-content" style="text-align:justify">
            {{language.about_content1}}
          </div>
        </div>

        <div class="content-section">
          <div class="section-title">
            {{language.about_title2}}
            <!-- <i class="el-icon-tickets"></i> -->
          </div>
          <div class="section-content">
            <el-image :src="language.about_pic"></el-image>
          </div>
        </div>

        <div class="content-section">
          <div class="section-title">
            {{language.about_title3}}
            <!-- <i class="el-icon-tickets"></i> -->
          </div>
          <div class="section-content">
            <div v-for="(item,index) in about_list" :key="index">
              {{item}}
            </div>
          </div>
        </div>

        <div class="content-section">
          <div class="section-title">
            {{language.about_title4}}
            <!-- <i class="el-icon-tickets"></i> -->
          </div>
          <div class="section-content">
            <el-image src="https://z3.ax1x.com/2021/09/16/4nv1h9.png"></el-image>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  props: {
    language: Object
  },
  data () {
    return {
      id: '',
      about_list: {},
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
  methods: {},
  mounted: function () {
    this.about_list = this.language.about_list
    this.id = this.$route.query.id
    console.log(this.id)
    this.$axios.get(config.API + config.getMoreInfo + '?dataset_id=' + this.id).then(res => {
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
  font-family: -apple-system,BlinkMacSystemFont,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.bg-color{
  background-color: #eceaff;
}
</style>
<style scoped>
.all{
  /* font-weight: bold; */
  margin: auto;
  width: 90%;
}
.title{
  margin-top: 100px;
  margin-bottom: 100px;
}
.title-title{
  color: #64438D;
  font-size: 60px;
  font-weight: 1000;
  text-align: left;
  margin-left: 200px;
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
