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
}

export default store
