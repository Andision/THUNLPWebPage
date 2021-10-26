<template>
  <div class="reset-all">
    <el-card class="reset-all-card">
      <div slot="header" class="clearfix">
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- <el-row class="reset-card-line">
        <el-input v-model="form.pswd" placeholder="haha" show-password></el-input>
      </el-row>
      <el-row class="reset-card-line">
        <el-input v-model="form.check" placeholder="haha" show-password></el-input>
      </el-row> -->
      <el-row class="reset-card-line">
        <el-button type="primary" @click="handleSubmitForm('ruleForm')" style="width:100%;">RESETs</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
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
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  props: {
    language: Object
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
