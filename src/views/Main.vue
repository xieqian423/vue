<template>
  <div class="main">
    <!-- <div class="menu-list">
      <div v-for="m in menulist">{{m.name}}</div>
    </div>
    <div class="product-list">
      <router-view/>
    </div> -->
    11111
  </div>
</template>

<script>
export default {
  name: 'App',
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
    bindBeforeunload () {
      window.onbeforeunload = function() {
        alert("There are unsaved changes. Leave now?");
        return "There are unsaved changes. Leave now?";
      };
    }
  },
  components: {
  }
}
</script>

<style lang='less'>
.main{
   
}

</style>
