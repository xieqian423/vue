import Vue from 'vue'
// import Router from 'vue-router'
import Router from '../plugins/Router.js'
import Main from '../views/Main'
import pageone from '../views/page-one'
// import ProductList from '../components/ProductList'
// import hello from '../components/HelloWorld'

// Vue.use(Router)

export default new Router(Vue, {
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    // {
    //   path: '/productlist/:type',
    //   name: 'ProductList',
    //   component: () => import('../components/ProductList')
    // }, {
    //   path: '/hello',
    //   name: 'hello',
    //   component: () => import('../components/HelloWorld')
    // }, 
    {
      path: '/pageone',
      name: 'pageone',
      component: pageone
    }, 
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test')
    }
  ]
})
