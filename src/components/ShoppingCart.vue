<template>
  <div class="cart">
    <div class="cart-item" v-for="p in carts" >
      <span>{{p.title}}</span>
      <span>{{p.price}}</span>
      <span @click="onRemove(p)">删除</span>
    </div>
    <button @click="onCheckout">结算</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Product',
  data () {
    return {
        // products: []
    }
  },
  created () {
      // this.products = this.$store.state.shopcart
  },
  computed: {
    carts () {
       return this.$store.state.cart.items
    }
  },
  methods: {
    // 调用1
    // onRemove (p) {
    //   this.$store.commit('removecart', p)
    // },
    // 调用2
    ...mapMutations({
      onRemove: 'cart/removecart'
    }),
    // 调用3 : 在组件内调用 this.removecart 方法
    // ...mapMutations([
    //   'removecart'
    // ]),
    onCheckout () {

    }
  }
}
</script>

<style lang='less' scoped>
  .cart{
    // border: 1px solid #ddd;
    &-item{

    }
    button{
      float: right;
    }
  }
</style>
