// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

Vue.prototype.handleMenuSelect = function (key, keyPath) {
  console.log(key)
  // console.log(this.language.Password1)
  // if (key === '1-1') {
  //   this.language = zh
  // } else if (key === '1-2') {
  //   this.language = en
  // }

  switch (key) {
    case '1':
      router.push({path: '/'})
      break
    case '2':
      router.push({path: '/leaderboard'})
      break
    case '3':
      router.push({path: '/about'})
      break
    case '4-1':
      router.push({path: '/submit/attack'})
      break
    case '5-1':
      router.push({path: '/leaderboard/attack'})
      break
    case '6-1':
      router.push({path: '/judging'})
      break
    case '6-2':
      router.push({path: '/judging'})
      break
    case '7':
      router.push({path: '/setting'})
      break
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
