import Vue from 'vue'
import vuex from 'vuex'
// import type from './mutation-types'

import cart from './modules/cart.js'
import products from './modules/products.js'

Vue.use(vuex)

var store = new vuex.Store({
  modules: {
    cart,
    products
  }
})

export default store
