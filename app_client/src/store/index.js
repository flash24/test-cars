import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import userModule from '@/store/modules/userModule.js'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    key: 'data',
    storage: window.localStorage
})
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule
  },
  plugins: [vuexLocal.plugin]
})
