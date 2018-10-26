<template>
  <div>
   this is child2
  </div>
</template>

<script>
export default {
  name: 'TestChild',
  components: {
  },
  created () {
    // console.log('ready1')
    this.$root.Bus.$on('eventName', value => {
      alert(value)
    })
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
