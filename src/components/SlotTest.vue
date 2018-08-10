<template>
  <div>
    <h1>父组件的标题</h1>
    <component-test>
      <div slot="footer">底部：不同的内容替换</div>
      <div slot="header">头部：不同的内容替换</div>
    </component-test>
    <div>------end-------</div>
  </div>
</template>

<script>
import Dispacth from './Dispacth'
export default {
  name: 'SlotTest',
  components: {
    'component-test': Dispacth
  }
}
</script>

<style scoped>

</style>
