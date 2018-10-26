<template>
  <div>
    22222
      <child></child>
      <child2></child2>
  </div>
</template>

<script>
import child from './child'
import child2 from './child2'
export default {
  name: 'Test',
  data () {
    return {
     
    }
  },
  components: {
    child,
    child2
  },
  created () {
    console.log('ready1')
  },
  methods: {
    showCity1 (data) {
      alert(data)
    }
  }
}
</script>

<style scoped>

</style>
