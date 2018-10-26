<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div v-viewer class="images clearfix">
      <template v-for="image in images">
        <img :src="image" class="image" :key="image">
      </template>
     <button type="button" @click="show">Show</button>
    </div> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      images: [
        'https://picsum.photos/200/200',
        'https://picsum.photos/300/200',
        'https://picsum.photos/250/200'
      ]
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
