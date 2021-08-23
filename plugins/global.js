import Vue from 'vue'
import API from '../utils/api'

const $api = {
  install(Vue) {
    Vue.prototype.$api = API
  }
}

Vue.use($api)

export default ({ app }, inject) => {
  app.$api = API
}
