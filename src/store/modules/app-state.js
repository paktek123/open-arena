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
    login ({commit}, credentials) {
      commit('login') // show spinner
      Vue.axios.post('api/login', { username: credentials.username, password: credentials.password }).then(function (response) {
        commit('loginSuccess')
      }, function (error) {
        console.log(['error', error])
      })
    },
    logout ({commit}) {
      commit('logout')
    },
    register ({commit}, credentials) {
      return new Promise((resolve, reject) => {
        Vue.axios.post('api/register', { username: credentials.username, password: credentials.password, email: credentials.email }).then((response) => {
          return resolve(response)
        }).catch((error) => {
          return reject(error.response.data.error)
        })
      }).then((success) => {
        return Promise.resolve(success)
      }).catch((error) => {
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.isLoggedIn
    }
  }
}

export default store
