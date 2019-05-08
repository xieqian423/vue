<template>
  <div class="main">
    11111
    <button @click="next">下一页</button>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'main',
  data () {
    return {
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
    this.bindBeforeunload()
  },
  methods: {
    next () {
      location.href = 'https://www.baidu.com/'
    },
    bindBeforeunload () {
      window.onbeforeunload = function() {
        alert("There are unsaved changes. Leave now?");
        return "There are unsaved changes. Leave now?";
      };
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang='less'>
.main{
   
}

</style>
