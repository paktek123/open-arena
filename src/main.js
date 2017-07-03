// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import MainNav from './components/MainNav.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login}
]

const router = new VueRouter({routes})

const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login (state) {
      state.pending = true
    },
    loginSuccess (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    logout (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login ({commit}, creds) {
      commit('login') // show spinner
      return new Promise(resolve => {
        setTimeout(() => {
          commit('loginSuccess')
          resolve()
        }, 1000)
      })
    },
    logout ({commit}) {
      commit('logout')
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: {
    'main-nav': MainNav
  }
}).$mount('#app')
