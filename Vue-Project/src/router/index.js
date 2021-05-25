import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Test from '@/components/Test'
import LeaderBoard from '@/components/LeaderBoard'
import FAQ from '@/components/FAQ'
import DataDownload from '@/components/DataDownload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/leaderboard',
      name: 'LeaderBoard',
      component: LeaderBoard
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/download',
      name: 'DataDownload',
      component: DataDownload
    }
  ]
})
