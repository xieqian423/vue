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
export default {
  name: 'Product',
  props: [],
  data () {
    return {
        type: this.$route.params.type,
        // products: this.$store.state.products.items
    }
  },
  created () {
    this.$store.dispatch('products/getProducts', {type: this.type})
  },
  computed: {
    products () {
       return this.$store.state.products.items
    }
  },
  methods: {
    onBug (p) {
      this.$store.dispatch('cart/addcartAsync', p)
      // this.$store.dispatch('addcartAsync', p)
    }
  }
}
</script>

<style scoped>

</style>
