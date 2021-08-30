<template>
  <div class="all">
    <h1 class="title">{{ language.task_wyzskj }}</h1>
    <div style="margin:50px; text-align:left;font-size: 20px;">
      {{language.hint_task}}
    </div>
    <el-card class="main">
      <div slot="header">
        <div class="main-title">
          <div class="title-title">
            {{ language.task_synl }}
            <el-switch v-model="showAll" active-color="#64438D"> </el-switch>
          </div>
          <hr />
          <div class="title-sub">
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              "
            >
              <!-- <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_sjnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.sj" active-color="#64438D"></el-switch></div></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_ljnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.lj" active-color="#64438D"></el-switch></div></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_jsnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.js" active-color="#64438D"></el-switch></div></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_szjsnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.szjs" active-color="#64438D"></el-switch></div></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_scnl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.sc" active-color="#64438D"></el-switch></div></div></el-col>
              <el-col :span="4"><div class="title-sub-section"><div class="title-sub-section-text">{{language.task_dyynl}}</div><div class="title-sub-section-btn"><el-switch v-model="s.dyy" active-color="#64438D"></el-switch></div></div></el-col> -->
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_yyljcy}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.yyljcy" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_yyljpj}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.yyljpj" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_xxhq}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.xxhq" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_yysc}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch
                    v-model="s.yysc"
                    active-color="#64438D"
                  ></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_dhjh}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.dhjh" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_dyy}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.dyy" active-color="#64438D"></el-switch>
                </div>
              </div>
              <div class="title-sub-section">
                <div class="title-sub-section-text">
                  {{language.leaderboard_sxtl}}
                </div>
                <div class="title-sub-section-btn">
                  <el-switch v-model="s.sxtl" active-color="#64438D"></el-switch>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="title-select">
            <!-- <el-checkbox-group
              v-model="c"
              :min="0"
              :max="1"
            >
              <el-checkbox label="NENGLI" v-model="c.nl"><div class="title-select-text">{{language.task_nlb}}</div></el-checkbox>
            </el-checkbox-group> -->
            <!-- <el-checkbox label="JINJIAN" :v-model="true" disabled><div class="title-select-text">{{language.task_jjb}}</div></el-checkbox> -->
            <el-checkbox v-model="checked2">{{
              language.task_jjb
            }}</el-checkbox>
          </div>
          <hr />
          <div class="title-select">
            <el-button type="primary" href="/api/download?method=simple">{{language.task_xzsjj}}</el-button>
          </div>
        </div>
      </div>
      <div class="main-content" v-show="!checked2">
        <div class="main-section" v-show="s.yyljcy">
          <TaskSection
            :data="alldata.all['语言理解能力-词句级']"
            title="语言理解能力-词句级"
            :sub="language.hint_yyljcy"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.yyljpj">
          <TaskSection
            :data="alldata.all['语言理解能力-篇章级']"
            title="语言理解能力-篇章级"
            :sub="language.hint_yyljpj"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.xxhq">
          <TaskSection
            :data="alldata.all.信息获取及问答能力"
            title="信息获取及问答能力"
            :sub="language.hint_xxhq"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.yysc">
          <TaskSection
            :data="alldata.all.语言生成能力"
            title="语言生成能力"
            :sub="language.hint_yysc"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.dhjh">
          <TaskSection
            :data="alldata.all.对话交互能力"
            title="对话交互能力"
            :sub="language.hint_dhjh"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.dyy">
          <TaskSection
            :data="alldata.all.多语言能力"
            title="多语言能力"
            :sub="language.hint_dyy"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.sxtl">
          <TaskSection
            :data="alldata.all.数学推理能力"
            title="数学推理能力"
            :sub="language.hint_sxtl"
          ></TaskSection>
        </div>
        <!-- <div class="main-section" v-show="s.sj">
          <TaskSection
            :data="alldata.all.识记能力"
            title="识记能力"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.lj">
          <TaskSection
            :data="alldata.all.理解能力"
            title="理解能力"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.js">
          <TaskSection
            :data="alldata.all.检索能力"
            title="检索能力"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.szjs">
          <TaskSection
            :data="alldata.all.数值计算能力"
            title="数值计算能力"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.sc">
          <TaskSection
            :data="alldata.all.生成能力"
            title="生成能力"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.dyy">
          <TaskSection
            :data="alldata.all.多语言能力"
            title="多语言能力"
          ></TaskSection>
        </div> -->
      </div>
      <div class="main-content" v-show="checked2">
        <div class="main-section" v-show="s.yyljcy">
          <TaskSection
            :data="alldata.jj['语言理解能力-词句级']"
            title="语言理解能力-词句级"
            :sub="language.hint_yyljcy"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.yyljpj">
          <TaskSection
            :data="alldata.jj['语言理解能力-篇章级']"
            title="语言理解能力-篇章级"
            :sub="language.hint_yyljpj"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.xxhq">
          <TaskSection
            :data="alldata.jj.信息获取及问答能力"
            title="信息获取及问答能力"
            :sub="language.hint_xxhq"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.yysc">
          <TaskSection
            :data="alldata.jj.语言生成能力"
            title="语言生成能力"
            :sub="language.hint_yysc"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.dhjh">
          <TaskSection
            :data="alldata.jj.对话交互能力"
            title="对话交互能力"
            :sub="language.hint_dhjh"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.dyy">
          <TaskSection
            :data="alldata.jj.多语言能力"
            title="多语言能力"
            :sub="language.hint_dyy"
          ></TaskSection>
        </div>
        <div class="main-section" v-show="s.sxtl">
          <TaskSection
            :data="alldata.jj.数学推理能力"
            title="数学推理能力"
            :sub="language.hint_sxtl"
          ></TaskSection>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import TaskSection from '@/components/TaskSection.vue'
import config from '@/components/config.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      showAll: true,
      checked2: false,
      s: {
        sxtl: true,
        dyy: true,
        dhjh: true,
        yysc: true,
        xxhq: true,
        yyljpj: true,
        yyljcy: true
      },
      c: [
        'NENGLI',
        'JINJIAN'
      ],
      show: {},
      alldata: {
        all: {},
        jj: {}
      }
    }
  },
  props: {
    language: Object
  },
  methods: {
  },
  watch: {
    showAll (curVal, oldVal) {
      if (curVal) {
        this.s.sxtl = true
        this.s.dyy = true
        this.s.dhjh = true
        this.s.yysc = true
        this.s.xxhq = true
        this.s.yyljpj = true
        this.s.yyljcy = true
      } else {
        this.s.sxtl = false
        this.s.dyy = false
        this.s.dhjh = false
        this.s.yysc = false
        this.s.xxhq = false
        this.s.yyljpj = false
        this.s.yyljcy = false
      }
    },
    checked2 (curVal, oldVal) {
      this.showAll = true
      this.s.sxtl = true
      this.s.dyy = true
      this.s.dhjh = true
      this.s.yysc = true
      this.s.xxhq = true
      this.s.yyljpj = true
      this.s.yyljcy = true
    }
  },
  mounted: function () {
    console.log('In MOUNT')
    // let data0 = {
    //   'abilities': ['识记能力', '数值计算能力', '检索能力', '理解能力', '生成能力', '多语言能力'],
    //   'sample': 0
    // }
    // this.$axios.post(config.API + config.getTaskAll, JSON.stringify(data0)).then(res => {
    //   if (res.status === 200) {
    //     if (res.data.re_code === '0') {
    //       console.log('TASK', res.data.ability_datasets_dic)
    //       this.show = res.data.ability_datasets_dic
    //       this.alldata.all = res.data.ability_datasets_dic
    //     }
    //   }
    // })
    this.$axios.request({
      url: config.API + config.getTaskAll,
      method: 'POST',
      data: {
        'abilities': ['语言理解能力-词句级', '语言理解能力-篇章级', '信息获取及问答能力', '语言生成能力', '对话交互能力', '多语言能力', '数学推理能力'],
        'simple': 0
      }
    }).then((res) => {
      console.log('new tasl', res)
      if (res.status === 200) {
        this.show = res.data.ability_datasets_dic
        this.alldata.all = res.data.ability_datasets_dic
      }
    })

    this.$axios.request({
      url: config.API + config.getTaskAll,
      method: 'POST',
      data: {
        'abilities': ['语言理解能力-词句级', '语言理解能力-篇章级', '信息获取及问答能力', '语言生成能力', '对话交互能力', '多语言能力', '数学推理能力'],
        'simple': 1
      }
    }).then((res) => {
      console.log('s tasl', res)
      if (res.status === 200) {
        this.alldata.jj = res.data.ability_datasets_dic
      }
    })

    this.alldata.all = this.test_data.ability_datasets_dic
  },
  components: { TaskSection }
}
</script>

<style>
.bubble .el-link--inner{
  color: white;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all {
  width: 90%;
  margin: auto;
}
.title {
  text-align: left;
  margin: 50px;
  color: #64438d;
  font-size: 40px;
}
.main {
  margin: 50px;
}
.main-section {
  margin-top: 50px;
}
.title-title {
  text-align: left;
  font-size: x-large;
  font-weight: bold;
}
.title-sub-section {
  text-align: left;
}
.title-sub-section-text {
  margin-right: 10px;
  display: inline;
  font-size: large;
  font-weight: bold;
}
.title-select {
  text-align: right;
}
.title-select-text {
  font-size: large;
  font-weight: bold;
}
.title-title,
.title-sub,
.title-select {
  margin-top: 20px;
}
.title-sub,
.title-sub-section .title-sub-section-text .title-sub-section-btn {
  vertical-align: middle;
}
.title-sub-section-btn {
  display: inline;
}
</style>
