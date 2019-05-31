<template>
  <div>
    qq
    <anchored-heading :level="level" :list="list"><div>222</div></anchored-heading>
    <ul>
      <li>list 1</li>
      <li>list 2</li>
    </ul>
  </div>
</template>

<script>
import anchoredHeading from '../common/anchored-heading.vue' // 测试jsx组件
// import A from '../js/getClass.js'

export default {
  name: 'heading',
  data () {
    return {
      level: 2,
      list: [
        // {desc: 'this is a test text'}
      ],
      a: null,
      name: ''
    }
  },
  created (a, b) {
    console.log('ready1 child1')
    this.a = new A('XIEQIAN')
    this.name = this.a.name
    this.a.get()
  },
  methods: {
  },
  components: {
    'anchored-heading': anchoredHeading
  }
}
</script>

<style lang="scss" scoped>

</style>
