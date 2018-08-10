<template>
  <viewer :options="options" :images="images"
          @inited="inited"
          class="viewer" ref="viewer"
  >
    <template scope="scope">
      <img v-for="src in scope.images" :src="src" :key="src">
      {{scope.options}}
    </template>
  </viewer>
  <button type="button" @click="show">Show</button>
</template>

<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from "v-viewer/src/component.vue"
    export default {
        name: "Image",
      components: {
        Viewer
      },
      data() {
        images: ['1.jpg', '2.jpg']
      },
      methods: {
        inited (viewer) {
          this.$viewer = viewer
        },
        show () {
          this.$viewer.show()
        }
      }
    }
</script>

<style scoped>

</style>
