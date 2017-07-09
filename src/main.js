// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import MainNav from './components/MainNav.vue'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    'main-nav': MainNav
  }
})
