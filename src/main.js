// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'viewerjs/dist/viewer.css'
// import Viewer from 'v-viewer'
import vuex from 'vuex'

Vue.use(vuex)
// Vue.use(Viewer)

Vue.config.productionTip = false

var store = new vuex.Store({
  state: {
    show: false,
    counter: 0
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data () {
    return {
      Bus: new Vue()
    }
  }
})
