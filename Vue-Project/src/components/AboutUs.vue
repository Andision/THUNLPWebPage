<template>
  <div class="all">
    <div class="title">
      <div class="title-title">
        {{language.about_title}}
      </div>
    </div>
    <el-card style="width:90%; margin: auto; margin-bottom: 50px;">
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
            <!-- <el-image :src="language.about_pic"></el-image> -->
            <el-row :gutter="40">
              <el-col :span="25" v-for="(key,index) in head" :key="index">
                <el-row class="head-word">
                  <el-image :src="key.pic"></el-image>
                </el-row>
                <el-row class="head-word head-purple" v-if="language.language=='zh'">
                  {{key.zh.title}}
                </el-row>
                <el-row class="head-word" v-if="language.language=='zh'">
                  {{key.zh.name}}
                </el-row>
                <el-row class="head-word-en head-purple" v-if="language.language=='en'">
                  {{key.en.title}}
                </el-row>
                <el-row class="head-word-en" v-if="language.language=='en'">
                  {{key.en.name}}
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="content-section">
          <div class="section-title">
            {{language.about_title3}}
            <!-- <i class="el-icon-tickets"></i> -->
          </div>
          <div class="section-content">
            <div v-for="(item,index) in about_list" :key="index">
              <p>
                {{item}}
              </p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <div class="section-title">
            {{language.about_title4}}
            <!-- <i class="el-icon-tickets"></i> -->
          </div>
          <div class="section-content">
            <!-- <el-image src="https://z3.ax1x.com/2021/09/18/41ED6P.png"></el-image> -->
            <p v-if="language.language=='zh'">主要负责同学：姚远</p>
            <p v-if="language.language=='zh'">骨干同学：董青秀，关健，曹博希</p>
            <p v-if="language.language=='zh'">参与同学：张正彦，肖朝军，顾煜贤，王晓智，岂凡超，鲍军威，聂锦燃，周昆，黄轩成，曾哲妮，任抒怀，陆金梁，曾国洋，吴杨，张纪元，许诚强，汪华东，周子乐</p>
            <p v-if="language.language=='en'">Student in Charge: Yuan Yao</p>
            <p v-if="language.language=='en'">Core Member: Qingxiu Dong, Jian Guan, Boxi Cao</p>
            <p v-if="language.language=='en'">Team Member: Zhengyan Zhang, Chaojun Xiao, Yuxian Gu, Xiaozhi Wang, Fanchao Qi, Junwei Bao, Jinran Nie, Kun Zhou, Xuancheng Huang, Zheni Zeng, ShuHuai Ren, Jinliang Lu, Guoyang Zeng, Yang Wu, Jiyuan Zhang, Chengqiang Xu, Huadong Wang, Zile Zhou</p>

          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// import config from '@/components/config.json'
export default {
  props: {
    language: Object
  },
  data () {
    return {
      id: '',
      about_list: {},
      theNull: undefined,
      head: [
        {pic: 'https://z3.ax1x.com/2021/09/25/4sTU2j.png',
          en: {
            title: 'Director',
            name: 'Maosong Sun'
          },
          zh: {
            title: '主任',
            name: '孙茂松'
          }
        },
        {pic: 'https://z3.ax1x.com/2021/09/25/4sTaxs.png',
          en: {
            title: 'Vice Director',
            name: 'Zhifang Sui'
          },
          zh: {
            title: '副主任',
            name: '穗志方'
          }},
        {pic: 'https://z3.ax1x.com/2021/10/02/4bc7o4.png',
          en: {
            title: 'Vice Director',
            name: 'Erhong Yang'
          },
          zh: {
            title: '副主任',
            name: '杨尔弘'
          }},
        {pic: 'https://z3.ax1x.com/2021/09/25/4sTNGQ.png',
          en: {
            title: 'Secretary General',
            name: 'Zhiyuan Liu'
          },
          zh: {
            title: '秘书长',
            name: '刘知远'
          }},
        {pic: 'https://z3.ax1x.com/2021/10/02/4bcTwF.png',
          en: {
            title: 'Vice Secretary General',
            name: 'Xianpei Han'
          },
          zh: {
            title: '副秘书长',
            name: '韩先培'
          }}

      ]
    }
  },
  methods: {},
  mounted: function () {
    this.about_list = this.language.about_list
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
  font-family: "Microsoft YaHei","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.bg-color{
  background-color: #eceaff;
}
.el-col-25{
  width: 20%;
}
</style>
<style scoped>
.all{
  /* font-weight: bold; */
  margin: 50px;
  width: 90%;
}
.title{
  margin-left: 2%;
  margin-bottom: 100px;
}
.title-title{
  color: #64438D;
  font-size: 40px;
  font-weight: 1000;
  text-align: left;
  margin-left: 50px;
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
.head-word{
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
.head-word-en{
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.head-purple{
  color: #64438D;
}
</style>
