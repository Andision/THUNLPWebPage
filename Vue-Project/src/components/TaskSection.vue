<template>
  <el-card class="all">
    <div class="title">
      {{title}}
    </div>
    <div class="sub">
      <!-- 识别和记忆世界知识 -->
    </div>
    <div class="content">
      <el-row :gutter="12" v-for="i in num" :key="i">
        <el-tooltip
          class="item"
          effect="dark"
          placement="bottom"
          v-for="(j,index) in show.slice(i*4,(i+1)*4)" :key="i+index"
        >
          <div slot="content">
            <div class="bubble">
              <el-link class="link" v-for="(k,kindex) in j.link" :key="k.link+kindex" :href="'/#/more?id='+k.link">{{k.title}}</el-link>
            </div>
          </div>
          <el-col :span="6">
            <el-card class="box-card">
              <el-row>
                <el-col :span="6"><div class="card-left">{{j.index}}</div></el-col>
                <el-col :span="18"><div class="card-right">{{j.title}}</div></el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-tooltip>
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
      console.log('TASKSECTION1', this.data)
      var count = 1
      for (var key in this.data) {
        console.log(this.data[key])
        var tlist = []
        for (var k in this.data[key]) {
          console.log('ADS', this.data[key][k])
          tlist.push({
            title: this.data[key][k].dataset_name,
            link: this.data[key][k].dataset_id
          })
        }
        this.show.push({
          index: count,
          title: key,
          link: tlist
        })
        count++
      }
      console.log('TASKSECTION', this.show)
      // this.show = this.data
      var l = this.show.length
      var s = Math.ceil(l / 4)
      for (var i = 0; i < s; i++) {
        this.num.push(i)
      }
    }
  },
  props: {
    data: Array,
    title: String
  },
  watch: {
    data (curVal, oldVal) {
      this.makeData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  margin: auto;
  width: 100%;
}
.title{
  font-size: xx-large;
  text-align: left;
  margin-top: 20px;
}
.sub{
  font-size: large;
  text-align: left;
  margin-top: 20px;
}
.content{
  margin-top: 20px;
}
.box-card{
  background-color: #7857A1;
  width: 200px;
  margin-top: 20px;
}
.card-left{
  font-size: 50px;
  color: white;
  font-weight: bold;
}
.card-right{
  font-size: x-large;
  color: white;
  font-weight: bold;
  text-align: left;
  padding-left: 20px;
  vertical-align: middle;
}
.link{
  margin-right: 20px;
}
.bubble{
  padding-left: 20px;
}
</style>
