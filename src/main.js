import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/services/api'

import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/pt_BR.json'

import VueMyToasts from 'vue-my-toasts'
import Toast from '@/components/Toast'

Vue.use(VueMyToasts, {
  component: Toast,
  options: {
    width: '400px',
    position: 'top-right',
    padding: '2rem'
  }
})

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

Vue.config.productionTip = false
Vue.prototype.$http = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
