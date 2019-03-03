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
  getters: {
    // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
    // 且只有当它的依赖值发生了改变才会被重新计算

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
