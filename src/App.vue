<template>
  <div id="app">
    <div class="menu-list">
      <a v-for="(m,index) in menulist" @click="onMenu(index)" :key="'menu'+index">{{m.name}}</a>
    </div>
    <div class="product-list">
      <keep-alive include="main">
        <router-view/>
      </keep-alive>
    </div>
    <!-- <a @click="onDelayload">测试延迟加载</a> -->
    <div class="shopcart">
        <div class="title"> 购物车</div>
        <shopcart></shopcart>
    </div>
    <transition name="fade">
      <div class="pop" v-if="isShowPop">
          这是一个弹窗
      </div>
    </transition>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import shopcart from './components/ShoppingCart.vue'
export default {
  name: 'App',
  data () {
    return {
      isShowPop: false,
      menulist: [
        {
          name: 'menu1'
        },
        {
          name: 'menu2'
        }
      ]
    }
  },
  created () {
    // this.bindBeforeunload()
  },
  methods: {
    onMenu (id) {
        // this.isShowPop = !this.isShowPop
        location.href = '#/productlist/' + (id+1)
    },
    onDelayload () {
       // location.href = '#/hello'
    }
  },
  components: {
    // 'shop-cart': require('./components/ShoppingCart.vue'),
    shopcart
  }
}
</script>

<style lang='less'>
html, body{
  height: 100%;
  margin: 0;
  padding: 0
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100%;
}

.menu-list {
  float: left;
  width: 80px;
  height: 100%;
  text-align: center;
  border-right: 1px solid #F8F8F8;
  box-sizing: border-box;
  a{
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    // background: #F8F8F8;
    &:active, &:hover{
      border-left: 3px solid #EC2700;
    }
  }
  &:after{
      display: block;
      clear: both;
   }
   &:before{
     display: block;
     clear: both;
   }
}

.shopcart{
  position: fixed;
  bottom: 0;
  width: 100%;
  .title{
    border-top: 3px solid #ddd;
    border-bottom: 3px solid #ddd;
  }
}

.pop{
  width: 260px;
  height: 300px;
  left: 0;
  right: 0;
  margin: auto;
  position: fixed;
  bottom: 10px;
  border: 1px solid #cccccc;
}

.fade-enter{

}
.fade-enter-active{
}

.fade-leave{

}

.fade-leave-active{
  transition: opacity 0.5s;
}

.fade-leave-to{
  opacity: 0;
}

</style>
