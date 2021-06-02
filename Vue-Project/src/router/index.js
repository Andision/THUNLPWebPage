import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Test from '@/components/Test'
import User from '@/components/User'
import FAQ from '@/components/FAQ'
import DataDownload from '@/components/DataDownload'
import Submit from '@/components/Submit'
import MoreInfo from '@/components/MoreInfo'
import Task from '@/components/Task'
import Leaderboard from '@/components/Leaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '智源指数'
      },
      component: Home
    },
    {
      path: '/User',
      meta: {
        title: '智源指数'
      },
      name: 'User',
      component: User
    },
    {
      path: '/faq',
      meta: {
        title: '智源指数'
      },
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/test',
      meta: {
        title: '智源指数'
      },
      name: 'Test',
      component: Test
    },
    {
      path: '/download',
      meta: {
        title: '智源指数'
      },
      name: 'DataDownload',
      component: DataDownload
    },
    {
      path: '/submit',
      meta: {
        title: '智源指数'
      },
      name: 'Submit',
      component: Submit
    },
    {
      path: '/more',
      meta: {
        title: '智源指数'
      },
      name: 'MoreInfo',
      component: MoreInfo
    },
    {
      path: '/task',
      meta: {
        title: '智源指数'
      },
      name: 'Task',
      component: Task
    },
    {
      path: '/leaderboard',
      meta: {
        title: '智源指数'
      },
      name: 'Leaderboard',
      component: Leaderboard
    }
  ]
})
