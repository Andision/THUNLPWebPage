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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/User',
      name: 'User',
      component: User
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
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/more',
      name: 'MoreInfo',
      component: MoreInfo
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
