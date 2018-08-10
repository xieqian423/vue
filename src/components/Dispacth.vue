<template>
  <div>
    <h4>子组件的标题</h4>
    <slot name="header"></slot>
    <slot name="footer">底部：不同的内容替换</slot>
  </div>
</template>

<script>
export default {
  name: 'Dispacth'
}
</script>

<style scoped>

</style>
