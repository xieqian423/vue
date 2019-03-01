import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import ProductList from '../components/ProductList'
import pageTwo from '../views/page-two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/productlist/:type',
      name: 'ProductList',
      component: ProductList
    }
  ]
})
