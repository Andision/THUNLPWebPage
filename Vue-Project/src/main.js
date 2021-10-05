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
