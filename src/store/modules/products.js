// 产品模块
import shop from '../../api/shop.js'

const state = {
  items: [],
  checkoutStatus: null
}

const mutations = {
  setProducts (state, products) {
     state.items = products
  }
}

const actions = {
  getProducts ({ state, commit }, data) {
    shop.getProducts(data.type).then(res => {
        commit('setProducts', res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
