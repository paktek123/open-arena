// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SimpleVueValidation from 'simple-vue-validator'

import MainNav from './components/MainNav.vue'

Vue.use(VueAxios, axios)
Vue.use(SimpleVueValidation)

axios.defaults.baseURL = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    'main-nav': MainNav
  }
})
