<template>
  <div class="all">
    <h1 class="title">{{language.sjxz}}</h1>
    <el-card class="main">
      <div slot="header">
        <div class="main-title">
          <div class="title-title">
            {{language.task_synl}}
            <el-switch
              v-model="s.all"
              active-color="#64438D"
            >
            </el-switch>
          </div>
          <hr>
          <div class="title-sub">
            <el-row :gutter="20">
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_sjnl}}</div><el-switch v-model="s.all" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_ljnl}}</div><el-switch v-model="s.all" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_jsnl}}</div><el-switch v-model="s.all" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_szjsnl}}</div><el-switch v-model="s.all" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_scnl}}</div><el-switch v-model="s.all" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_dyynl}}</div><el-switch v-model="s.all" active-color="#64438D"></el-switch></div></el-col>
            </el-row>
          </div>
          <hr>
          <div class="title-select">
            <el-checkbox-group
              v-model="c"
              :min="0"
              :max="1"
            >
              <el-checkbox label="NENGLI" v-model="c.nl"><div class="title-select-text">{{language.task_nlb}}</div></el-checkbox>
              <el-checkbox label="JINJIAN" v-model="c.jj"><div class="title-select-text">{{language.task_jjb}}</div></el-checkbox>
            </el-checkbox-group>
          </div>
          <hr>
        </div>
      </div>
      <div class="main-content">
        <div class="main-section">
          <TaskSection :data="show"></TaskSection>
        </div>
        <div class="main-section">
          <TaskSection :data="show"></TaskSection>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import en from '@/components/en.json'
import TaskSection from '@/components/TaskSection.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      language: en,
      s: {
        all: true
      },
      c: [
        'NENGLI',
        'JINJIAN'
      ],
      show: [
        {
          index: '01',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            },
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '01',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'www.baidu.com'
            }
          ]
        }
      ]
    }
  },
  methods: {
  },
  components: { TaskSection }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  width: 80%;
  margin: auto;
}
.title{
  text-align: left;
  margin: 50px;
  color: #64438D;
  font-size: 40px;
}
.main{
  margin: 50px;
}
.main-section{
  margin-top: 50px;
}
.title-title{
  text-align: left;
  font-size: x-large;
  font-weight: bold;
}
.title-sub-section{
  text-align: left;
}
.title-sub-section-text{
  margin-right: 10px;
  display: inline;
  font-size: large;
  font-weight: bold;
}
.title-select{
  text-align: right;
}
.title-select-text{
  font-size: large;
  font-weight: bold;
}
.title-title, .title-sub, .title-select{
  margin-top: 20px;
}
</style>
