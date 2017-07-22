import Vue from 'vue'

const store = {
  state: {
    isLoggedIn: false,
    token: undefined
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
    },
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    login ({commit}, credentials) {
      return new Promise((resolve, reject) => {
        commit('login') // show spinner
        Vue.axios.post('api/login', { username: credentials.username, password: credentials.password }).then((response) => {
          return resolve(response)
        }).catch((error) => {
          return reject(error.response.data.error)
        })
      }).then((success) => {
        commit('setToken', success.data.token)
        commit('loginSuccess')
        return Promise.resolve(success.data.token)
      }).catch((error) => {
        return Promise.reject(error)
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
