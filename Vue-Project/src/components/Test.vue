<template>
  <div class="hello">
    <ForgetDoalog v-bind:v="dialogLoginVisible" v-on:close="handleLogin"></ForgetDoalog>
    <el-button @click="handleLogin(true)">HAHA</el-button>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import LoginDoalog from '@/components/LoginDialog.vue'
import ForgetDoalog from '@/components/ForgetDialog.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogLoginVisible: false
    }
  },
  components: {
    LoginDoalog,
    ForgetDoalog
  },
  methods: {
    handleLogin (isLocal) {
      if (isLocal) {
        this.dialogLoginVisible = true
      } else {
        this.dialogLoginVisible = false
      }
      console.log(this.dialogLoginVisible)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
