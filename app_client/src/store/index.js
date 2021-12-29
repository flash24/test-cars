import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import userModule from '@/store/modules/userModule.js'
import vehicleModule from '@/store/modules/vehicleModule.js'

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
    userModule,
    vehicleModule,
  },
  plugins: [vuexLocal.plugin]
})
