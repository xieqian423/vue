// 购物车模块

import types from '../mutation-types'
const state = {
  items: [],
  checkoutStatus: null　
}

const mutations = {
  [types.ADD_CART] (state, product) {
    state.items.push(product)
  },
  removecart (state, product) {
    for (var i in state.items) {
      if (product.id == state.items[i].id) {
        state.items.splice(i, 1)
      }
    }
  }
}

const actions = {
  addcartAsync ({ commit, state }, product) {
      commit(types.ADD_CART, product)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

