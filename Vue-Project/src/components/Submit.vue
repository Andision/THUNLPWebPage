<template>
  <div class="all">
    <h1 class="title">{{language.submit_cycp}}</h1>
    <div class="table">
      <div class="table-hint">
        {{language.submit_hint}}
      </div>
      <div class="table-form">
        <div class="table-color">
          <el-row class="input">
            <el-input
              v-model="submit.name"
              :placeholder="language.Model+' '+language.Name+'*'"
              size="large"
            ></el-input>
          </el-row>

          <el-row class="input">
            <el-input
              v-model="submit.discription"
              :placeholder="language.Model+' '+language.Description+'*'"
              size="large"
            ></el-input>
          </el-row>

          <el-row class="input">
            <el-input
              v-model="submit.para"
              :placeholder="language.submit_numOfPara+'*'"
              size="large"
            ></el-input>
          </el-row>

          <el-row class="input">
            <el-input
              v-model="submit.link"
              :placeholder="language.submit_paperLinks+'*'"
              size="large"
            ></el-input>
          </el-row>

          <el-row class="input">
            <el-input
              v-model="submit.github"
              :placeholder="language.Model+' URL'"
              size="large"
            ></el-input>
          </el-row>

          <el-row class="input" style="text-align: left;">
            <el-checkbox v-model="submit.public">{{language.submit_sfgk}}</el-checkbox>
          </el-row>
        </div>
        <el-row style="text-align: left; margin-top: 30px;">
            <el-checkbox v-model="check">
              <span>
                <span style="color: red;">* </span>{{language.submit_wlj}}
              </span>
            </el-checkbox>
          </el-row>

        <el-row style="text-align: right; margin-top: 50px; margin-bottom: 50px;">
          <el-button type="primary">{{language.Select + ' ZIP'}}</el-button>
          <el-button type="primary">{{language.Submit}}</el-button>
        </el-row>

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
      submit: {
        name: '',
        discription: '',
        para: '',
        link: '',
        github: '',
        public: false
      },
      check: false
    }
  },
  methods: {}
}
</script>
<style scoped>
.all{
  text-align: center;
}
.title {
  text-align: left;
  margin: 50px;
  color: #64438d;
  font-size: 40px;
}
.table {
  text-align: center;
  width: 40%;
  margin:auto;
}
.input{
  margin: 30px;
  text-align: center;
}
.table-hint{
  font-size: xx-large;
  margin-bottom: 30px;
}
.table-color{
  padding: 10px;
  background-color: #F5F4FE;
}
</style>
