import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SlotTest from '../components/SlotTest'
import pageOne from '../views/page-one'
import pageTwo from '../views/page-two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: pageOne
    },
    {
      path: '/two',
      name: 'pagetwo',
      component: pageTwo
    },
    {
      path: '/slot/test',
      name: 'Slot',
      component: SlotTest
    }
  ]
})
