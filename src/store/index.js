import Vue from 'vue'
import Vuex from 'vuex'
import appState from './modules/app-state'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appState
  }
})
