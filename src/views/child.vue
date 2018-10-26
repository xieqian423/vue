<template>
  <div>
   <a href="#" v-on:click="sendMsg()">发送消息</a>
  </div>
</template>

<script>
export default {
  name: 'TestChild',
  components: {
  },
  created () {
    console.log('ready1')
  },
  methods: {
    sendMsg (data) {
      // this.$emit('showCity', 'beijing')
      this.$root.Bus.$emit('eventName', 123)
    }
  }
}
</script>

<style scoped>

</style>
