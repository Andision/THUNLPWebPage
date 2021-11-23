<template>
  <el-card class="all">
    <div class="title">
      <el-tooltip effect="dark" :content="hint" placement="top">
        <span>{{title}}</span>
        </el-tooltip>
    </div>
    <div class="sub">
      <!-- 识别和记忆世界知识 -->
      {{sub}}
    </div>
    <div class="content">
      <el-row :gutter="12" v-for="i in num" :key="i" style="margin-top: 50px;" type="flex" justify="start">
        <el-col :span="6" v-for="(j,index) in show.slice(i*4,(i+1)*4)" :key="i+index">
          <el-dropdown
            placement="bottom-end"
          >
            <el-col :span="6">
              <el-card class="box-card">
                <el-row style="height:100%; vertical-align: -webkit-baseline-middle;">
                  <el-col :span="6"><div class="card-left">{{j.index}}</div></el-col>
                  <el-col :span="18">
                    <div style="display: flex; display: -webkit-flex; height:80px; justify-content: left; align-items: center;">
                      <div class="card-right">{{j.title}}</div>
                    </div>
                  </el-col>
                  <!-- <el-col :span="6" class="card-left">{{j.index}}</el-col>
                  <el-col :span="18" class="card-right">{{j.title}}</el-col> -->
                </el-row>
              </el-card>
            </el-col>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(k,kindex) in j.link" :key="k.link+kindex"><el-link class="link" :href="'/#/more?id='+k.link" :underline="false">{{k.title}}</el-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <el-tooltip
            class="item"
            effect="dark"
            placement="bottom"
          >
            <div slot="content">
              <div class="bubble">
                <el-link class="link" v-for="(k,kindex) in j.link" :key="k.link+kindex" :href="'/#/more?id='+k.link">{{k.title}}</el-link>
              </div>
            </div>
            <el-col :span="6">
              <el-card class="box-card">
                <el-row style="height:100%; vertical-align: -webkit-baseline-middle;">
                  <el-col :span="6"><div class="card-left">{{j.index}}</div></el-col>
                  <el-col :span="18" style="height:100%; vertical-align: -webkit-baseline-middle;"><div class="card-right">{{j.title}}</div></el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-tooltip> -->
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: [],
      show: []
    }
  },
  methods: {
    makeData () {
      // console.log('TASKSECTION1', this.data)
      var count = 1
      for (var key in this.data) {
        // console.log(this.data[key])
        var tlist = []
        for (var k in this.data[key]) {
          // console.log('ADS', this.data[key][k])
          tlist.push({
            title: this.data[key][k].dataset_name,
            link: this.data[key][k].dataset_id
          })
        }
        var tt = ''
        // console.log('123', key.split('|')[0])
        if (this.language === 'zh') {
          tt = key.split('|')[0]
        } else {
          tt = key.split('|')[1]
        }
        this.show.push({
          index: count,
          title: tt,
          link: tlist
        })
        count++
      }
      // console.log('TASKSECTION', this.show)
      // this.show = this.data
      var l = this.show.length
      var s = Math.ceil(l / 4)
      for (var i = 0; i < s; i++) {
        this.num.push(i)
      }
    }
  },
  mounted: function () {
    console.log(this.title)
  },
  props: {
    data: Array,
    title: String,
    hint: String,
    language: String,
    sub: String
  },
  watch: {
    data (curVal, oldVal) {
      this.makeData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box-card .el-card__body{
  /* background-color: aqua; */
  height: 80px;
  padding: 0;
  vertical-align: -webkit-baseline-middle;
  padding-right: 10px;
  border: white;
}
.el-popper{
  width: 230px;
}
</style>

<style scoped>
.all{
  margin: auto;
  width: 100%;
}
.title{
  font-size: xx-large;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
}
.sub{
  font-size: large;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
}
.content{
  margin-top: -10px;
  /* margin-left: -50px; */
}
.box-card{
  background-color: #7857A1;
  width: 250px;
  height: 80px;
  /* margin-top: 20px; */
  margin: auto;
}
.card-left{
  font-size: xx-large;
  color: white;
  font-weight: bold;
  margin-top: 20px;
}
.card-right{
  /* margin: auto; */
  font-size: large;
  color: white;
  font-weight: bold;
  text-align: left;
  /* vertical-align: -webkit-baseline-middle; */
  /* padding-top: 20px; */
  /* margin: auto; */
  /* padding-left: 20px;
  vertical-align: middle; */
}
.link{
  /* padding-right: 20px; */
  width: 100%;
  text-align: left;
}
.bubble{
  padding-left: 20px;
}
</style>
