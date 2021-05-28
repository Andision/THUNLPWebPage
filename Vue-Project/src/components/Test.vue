<template>
  <div class="all">
    <div class="title">
      识记能力
    </div>
    <div class="sub">
      识别和记忆世界知识
    </div>
    <div class="content">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card class="box-card">
            <el-row>
              <el-col :span="6"><div class="card-left">01</div></el-col>
              <el-col :span="18"><div class="card-right">456</div></el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <el-row>
              <el-col :span="6"><div class="card-left">01</div></el-col>
              <el-col :span="18"><div class="card-right">456</div></el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <el-row>
              <el-col :span="6"><div class="card-left">01</div></el-col>
              <el-col :span="18"><div class="card-right">456</div></el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <el-row>
              <el-col :span="6"><div class="card-left">01</div></el-col>
              <el-col :span="18"><div class="card-right">456</div></el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
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
  width: 250px;
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
}
</style>
