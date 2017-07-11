import Vue from 'vue'

const store = {
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
      console.log('login start')
      Vue.axios.post('api/login', { username: creds.username, password: creds.password }).then(function (response) {
        console.log(response)
        commit('loginSuccess')
      }, function (error) {
        console.log(['error', error])
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
}

export default store
