import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: true
  },
  mutations: {
    swapTheme (state) {
      state.darkTheme = !state.darkTheme
    }
  },
  actions: {

  }
})
