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
              v-model="submit.org"
              :placeholder="language.leaderboard_org"
              size="large"
            ></el-input>
          </el-row>

          <el-row class="input">
            <el-input
              v-model="submit.link"
              :placeholder="language.submit_paperLinks"
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

          <el-row class="input" style="text-align: left;">
            <el-checkbox v-model="submit.pretrain">{{language.submit_sfyxl}}</el-checkbox>
          </el-row>

          <el-row class="input" style="text-align: left;">
            <el-checkbox v-model="submit.integration">{{language.submit_sfjc}}</el-checkbox>
          </el-row>

          <el-row class="input" style="text-align: left;">
            <el-checkbox v-model="submit.multask">{{language.submit_sfdrw}}</el-checkbox>
          </el-row>
          <el-row class="input" style="text-align: left;">
            <el-checkbox v-model="check">
              <span>
                <span style="color: red;">* </span>{{language.submit_wlj}}
              </span>
            </el-checkbox>
          </el-row>
        </div>

        <el-row class="input" style="text-align: left;">
          <div v-show="showFileName!=''">
            已选择：{{showFileName}}
          </div>
        </el-row>

        <el-row style="text-align: right; margin-top: 50px; margin-bottom: 50px;">
          <el-button type="primary" @click="handleClickSelect">{{language.Select + ' ZIP'}}</el-button>
          <el-button type="primary" @click="handleClickSubmit">{{language.Submit}}</el-button>
        </el-row>

        <input ref="filElem" type="file" style="display: none;" @change="handleFileChange">

      </div>
    </div>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  data () {
    return {
      submit: {
        name: '',
        discription: '',
        para: '',
        link: '',
        github: '',
        public: false,
        pretrain: false,
        integration: false,
        multask: false,
        org: ''
      },
      submit_clear: {
        name: '',
        discription: '',
        para: '',
        link: '',
        github: '',
        public: false,
        pretrain: false,
        integration: false,
        multask: false,
        org: ''
      },
      check: false,
      showFileName: ''
    }
  },
  props: {
    language: Object
  },
  mounted: function () {
    // this.notOpen()
    var that = this.$parent.$parent.$parent
    var tthis = this
    setTimeout(function () {
      console.log('In Submit Mount:', that.isLogin)
      if (!that.isLogin) {
        tthis.$alert(tthis.language.notlogin + ' ' + tthis.language.gologin, '', {
          confirmButtonText: 'OK'
          // cancelButtonText: tthis.language.Cancel
        }).then(() => {
          console.log('Submit Mount LOGIN')
          that.handleLoginStatus(true)
        }).catch(() => {
          tthis.$router.push({path: '/'})
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // })
        })
      }
    }, 1 * 1000)
  },
  methods: {
    handleClickSelect () {
      this.$refs.filElem.dispatchEvent(new MouseEvent('click'))
    },
    handleClickSubmit () {
      console.log(this.$refs.filElem.files[0].name)
      var that = this
      if (this.check === false || this.submit.name === '' || this.submit.description === '' || this.submit.paras === '' || this.$refs.filElem.files[0] === undefined) {
        this.$message({
          message: '请填写所有必填项并选择文件！',
          type: 'warning'
        })
      } else {
        let myConfig = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        let formData = new FormData()
        formData.append('file', this.$refs.filElem.files[0])
        formData.append('code_url', this.submit.github)
        formData.append('paper_url', this.submit.link)
        formData.append('modelname', this.submit.name)
        formData.append('description', this.submit.discription)
        formData.append('paras', this.submit.para)
        formData.append('institution', this.submit.org)

        if (this.submit.public) {
          formData.append('public', 1)
        } else {
          formData.append('public', 0)
        }
        if (this.submit.pretrain) {
          formData.append('pre_train', 1)
        } else {
          formData.append('pre_train', 0)
        }
        if (this.submit.integration) {
          formData.append('integrate', 1)
        } else {
          formData.append('integrate', 0)
        }
        if (this.submit.multask) {
          formData.append('multiple', 1)
        } else {
          formData.append('multiple', 0)
        }
        // formData.append('institution', this.submit.)
        this.$message('上传中......')
        this.$axios.post(config.API + config.toSubmit, formData, myConfig).then(res => {
          console.log('handleClickSubmit', res, res.status)
          if (res.status === 200) {
            this.submit = this.submit_clear
            this.check = false

            this.$message({
              message: '上传成功',
              type: 'success'
            })
            this.$message('评测中......')

            let formData1 = new FormData()
            formData1.append('fileid', res.data.fileid)
            that.$axios.post(config.API + '/review', formData1, myConfig).then(res1 => {
              console.log('handleClickSubmit', res1, res1.status)
              if (res1.status === 200) {
                that.$message({
                  message: '评测完成！即将跳转至测评报告。',
                  type: 'success'
                })
                setTimeout(function () {
                  that.$router.push({path: '/report?id=' + res.data.fileid})
                }, 3 * 1000)
              }
            })
            // this.$alert('评测完成！', {
            //   confirmButtonText: 'OK'
            // // callback: action => {
            // //   this.$message({
            // //     type: 'info',
            // //     message: `action: ${action}`
            // //   })
            // // }
            // })
          } else if (res.status === 4004) {
            this.$message.error(res.data.msg)
          } else {
            this.$message.error('上传失败')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    handleFileChange () {
      this.showFileName = this.$refs.filElem.files[0].name
    },
    notOpen () {
      this.$alert('参与测评暂未开放，敬请期待', '暂未开放', {
        confirmButtonText: '确定'
      })
    }
  }
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
  font-size: x-large;
  margin-bottom: 30px;
}
.table-color{
  padding: 10px;
  background-color: #F5F4FE;
}
</style>
