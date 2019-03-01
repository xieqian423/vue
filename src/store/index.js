import Vue from 'vue'
import vuex from 'vuex'
import type from './mutation-types'

Vue.use(vuex)

var store = new vuex.Store({
  state: {
    show: false,
    counter: 0,
    shopcart: []
  },
  mutations: { // 变化
    // 调用方式 store.commit('addcart', p)
    [type.ADD_CART] (state, product) {
      state.shopcart.push(product)
    },
    removecart (state, product) {
      for (var i in state.shopcart) {
        if (product.id == state.shopcart[i].id) {
          state.shopcart.splice(i, 1)
        }
      }
    }
  },
  actions: {
    // 调用方式 store.dispatch('addcartAsync', p)
    addcartAsync ({ commit, state }, product) {
      setTimeout(() => {
        commit(type.ADD_CART, product)
      }, 1000)
    }
  }
})

export default store
