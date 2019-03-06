import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
// import ProductList from '../components/ProductList'
// import hello from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }, {
      path: '/productlist/:type',
      name: 'ProductList',
      component: () => import('../components/ProductList')
    }, {
      path: '/hello',
      name: 'hello',
      component: () => import('../components/HelloWorld')
    }
  ]
})
