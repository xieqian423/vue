<template>
  <div>
    <div class="item" v-for="p in products" :key="p.id">
      <span>{{p.title}}</span>
      <span>{{p.price}}</span>
      <span @click="onBug(p)">购买</span>
    </div>
  </div>
</template>

<script>
import types from '../store/mutation-types'
import api from '../api/shop.js'
export default {
  name: 'Product',
  props: [],
  data () {
    return {
        type: this.$route.params.type,
        products: []
    }
  },
  created () {
      api.getProducts(this.type).then(res => {
          this.products = res
      })
  },
  methods: {
    onBug (p) {
      this.$store.commit(types.ADD_CART, p)
      // this.$store.dispatch('addcartAsync', p)
    }
  }
}
</script>

<style scoped>

</style>
