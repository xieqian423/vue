<template>
  <div>
    22222
      <child @showCity='showCity' v-if="!isHide"></child>

      <div v-pre>
        <p>{{message}}</p>
      </div>
      <a href="#/two"> 下一页</a>

      <button @click="handle2">button1</button>
      <child2 v-if="show"></child2>

      <button @click="createCode">生成二维码</button>
      <canvas id="canvas"></canvas>
      <div id="codebox" style="width:50px;height:50px">
        <img id="qrcode" src="" alt="">
      </div>

      <!-- <button @click="handle2">button2</button>
      <child2 v-if="show2"></child2>

      <button @click="handle3">button3</button>
      <child2 v-if="show3"></child2> -->

  </div>
</template>

<script>
import child from './child'
import child2 from './child2'

import QRcode from 'qrcode'

export default {
  name: 'Test',
  data () {
    return {
      message: 'this is a text',
      show: true,
      show2: true,
      show3: true,
      isHide: false
    }
  },
  components: {
    child,
    child2
  },
  created () {
    console.log('readyx')
  },
  mounted: function () {
    console.log('mounted')
  },
  activated: function () {
    console.log('activated')
  },
  deactivated: function () {
    console.log('deactivated')
  },
  methods: {
    createCode () {
      QRcode.toDataURL('http://staging.mifi.pt.xiaomi.com/loan/activity/201808/invitenewuser/index.html?from=test#/invited').then(url => {
          document.getElementById('qrcode').src = url
      })
    },
    showCity (data) {
      alert(data)
      this.isHide = true
    },
    handle1 () {
      this.show = false
      this.show = true
    },
    handle2 () {
      this.show = false
      setTimeout(() => { this.show = true }, 50)
      // 重置组件生命周期，但是会有闪烁
    },
    handle3 () {
      this.show = false
      this.$nextTick(() => { this.show = true })
      // 重置组件生命周期，无闪烁
    }
  }
}
</script>

<style scoped>

</style>
