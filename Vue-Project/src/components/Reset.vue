<template>
  <div class="reset-all">
    <el-card class="reset-all-card">
      <div slot="header" class="clearfix">
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" :placeholder="language.reset_pswd"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" :placeholder="language.reset_confirmPswd"></el-input>
        </el-form-item>
      </el-form>
      <!-- <el-row class="reset-card-line">
        <el-input v-model="form.pswd" placeholder="haha" show-password></el-input>
      </el-row>
      <el-row class="reset-card-line">
        <el-input v-model="form.check" placeholder="haha" show-password></el-input>
      </el-row> -->
      <el-row class="reset-card-line">
        <el-button type="primary" @click="handleSubmitForm('ruleForm')" style="width:100%;">{{language.reset_reset}}</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import config from '@/components/config.json'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      token: '',
      ruleForm: {
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmitForm (formName) {
      var that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!!')
          let formData = new FormData()
          formData.append('token', this.token)
          formData.append('password', this.ruleForm.pass)
          this.$axios.post(config.API + config.toReset, formData).then((res) => {
            if (config.debug === 'true') {
              console.log(res)
            }
            if (res.status === 200) {
              that.$message({
                message: res.data.msg,
                type: res.data.re_code === '0' ? 'success' : ''
              })
              that.$router.push({ path: '/' })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  props: {
    language: Object
  },
  mounted: function () {
    this.token = this.$route.query.token
    console.log('resetPswd', this.token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reset-all{
  text-align: center;
}
.reset-all-card{
  margin:auto;
  margin-top: 100px;
  width: 400px;
}
.reset-card-line{
  margin-top: 50px;
}
</style>
