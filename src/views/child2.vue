<template>
  <div @click='sendMsg'>
   this is child2
  </div>
</template>

<script>
export default {
  name: 'TestChild',
  components: {
  },
  created () {
    console.log('ready child2')
    this.$root.Bus.$on('eventName', value => {
      alert(value)
    })
  },
  mounted () {
    console.log('mounted child2')
  },
  methods: {
    sendMsg (data) {
      this.$emit('showCity', 'beijing')
    }
  },
  beforeDestroy () {
    this.$root.Bus.$off('eventName')
  }
}
</script>

<style scoped>

</style>
