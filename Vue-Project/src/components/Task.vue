<template>
  <div class="all">
    <h1 class="title">{{language.sjxz}}</h1>
    <el-card class="main">
      <div slot="header">
        <div class="main-title">
          <div class="title-title">
            {{language.task_synl}}
            <el-switch
              v-model="showAll"
              active-color="#64438D"
            >
            </el-switch>
          </div>
          <hr>
          <div class="title-sub">
            <el-row :gutter="20">
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_sjnl}}</div><el-switch v-model="s.sj" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_ljnl}}</div><el-switch v-model="s.lj" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_jsnl}}</div><el-switch v-model="s.js" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_szjsnl}}</div><el-switch v-model="s.szjs" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_scnl}}</div><el-switch v-model="s.sc" active-color="#64438D"></el-switch></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_dyynl}}</div><el-switch v-model="s.dyy" active-color="#64438D"></el-switch></div></el-col>
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
        <div class="main-section" v-if="s.sj">
          <TaskSection :data="show"></TaskSection>
        </div>
        <div class="main-section" v-if="s.lj">
          <TaskSection :data="data.lj"></TaskSection>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import en from '@/components/en.json'
import TaskSection from '@/components/TaskSection.vue'
import config from '@/components/config.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      language: en,
      showAll: true,
      s: {
        sj: true,
        lj: true,
        js: true,
        szjs: true,
        sc: true,
        dyy: true
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
              link: 'http://www.baidu.com'
            },
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '01',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        },
        {
          index: '02',
          title: 'qwe',
          link: [
            {
              title: 'data1',
              link: 'http://www.baidu.com'
            }
          ]
        }
      ],
      data: {
        lj: [
          {
            index: '02',
            title: 'LJ',
            link: [
              {
                title: 'data1',
                link: 'http://www.baidu.com'
              }
            ]
          },
          {
            index: '02',
            title: 'qwe',
            link: [
              {
                title: 'data1',
                link: 'http://www.baidu.com'
              }
            ]
          },
          {
            index: '02',
            title: 'qwe',
            link: [
              {
                title: 'data1',
                link: 'http://www.baidu.com'
              }
            ]
          },
          {
            index: '02',
            title: 'qwe',
            link: [
              {
                title: 'data1',
                link: 'http://www.baidu.com'
              }
            ]
          },
          {
            index: '02',
            title: 'qwe',
            link: [
              {
                title: 'data1',
                link: 'http://www.baidu.com'
              }
            ]
          },
          {
            index: '02',
            title: 'qwe',
            link: [
              {
                title: 'data1',
                link: 'http://www.baidu.com'
              }
            ]
          }
        ]

      }
    }
  },
  methods: {
  },
  mounted: function () {
    console.log('In MOUNT')
    let data = {
      'abilities': ['识记能力', '数值计算能力', '检索能力', '理解能力', '生成能力', '多语言能力']
    }
    this.$axios.get(config.API + config.getDataDownload, data).then(res => {
      console.log('TASK', res)
      if (res.status === 200) {
        if (res.data.re_code === '0') {
          this.isLogin = false
          document.cookie = ''
          this.$message({
            message: '登出成功',
            type: 'success'
          })
        }
      }
    })
  },
  components: { TaskSection },
  watch: {
    showAll (curVal, oldVal) {
      if (curVal) {
        this.s.sj = true
        this.s.lj = true
        this.s.js = true
        this.s.szjs = true
        this.s.sc = true
        this.s.dyy = true
      } else {
        this.s.sj = false
        this.s.lj = false
        this.s.js = false
        this.s.szjs = false
        this.s.sc = false
        this.s.dyy = false
      }
    }
  }
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
