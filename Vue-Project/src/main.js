// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'element-ui/lib/theme-chalk/index.css'
import '../src/theme/index.css'
import '../src/assets/font.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

Vue.prototype.openLoading = function () {
  const loading = this.$loading({ // 声明一个loading对象
    lock: true, // 是否锁屏
    text: '正在加载...', // 加载动画的文字
    spinner: 'el-icon-loading', // 引入的loading图标
    background: 'rgba(0, 0, 0, 0.3)', // 背景颜色
    target: '.sub-main', // 需要遮罩的区域
    body: true,
    customClass: 'mask' // 遮罩层新增类名
  })
  setTimeout(function () { // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
    loading.close() // 关闭遮罩层
  }, 30000)
  return loading
}
// rLoading.close();
// const rLoading = this.openLoading();

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
