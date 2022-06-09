import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import qs from 'qs'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs //全局注册，使用方法为:this.qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
