import { ApiV1 } from '@/api/setting.js'
export default {
    namespaced: true,
    state: {
        motors:[],
        types:[]
    },
    actions: {
        async getCatMotors({ commit }) {
            const response = await ApiV1.get('vehicle/cat/motors').catch(e => {
                console.error(e)
                return false
            })
            commit('SET_MOTORS', response.data)
            return true
        },
        async getCatTypes({ commit }) {
            const response = await ApiV1.get('vehicle/cat/types').catch(e => {
                console.error(e)
                return false
            })
            commit('SET_TYPE', response.data)
            return true
        }
    },
    mutations: {
        SET_MOTORS(state, data) {
            state.motors = data
        },
        SET_TYPE(state, data) {
            state.types = data
        },
    },
    getters: {
        motors: state => state.motors,
        types: state => state.types,
    }
}
