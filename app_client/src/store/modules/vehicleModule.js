import { ApiV1 } from '@/api/setting.js'
export default {
    namespaced: true,
    state: {
        motors: [],
        types: [], 
        list:[]
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
        },
        async storeVehicle({}, data) {
            const response = await ApiV1.post('vehicle', data).catch(e => {
                console.error(e)
                return false
            })
            return response.data
        },
        async updateVehicle({}, data) {
            const response = await ApiV1.put('vehicle', data).catch(e => {
                console.error(e)
                return false
            })
            return response.data
        },
        async deleteVehicle({}, data) {
            const response = await ApiV1.delete('vehicle', { params: { id: data.id } }).catch(e => {
                console.error(e)
                return false
            })
            return response.data
        },
        async getList({commit}) {
            const response = await ApiV1.get('vehicles').catch(e => {
                console.error(e)
                return false
            })
            commit('SET_LIST', response.data)
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
        SET_LIST(state, data) {
            state.list = data
        },
    },
    getters: {
        motors: state => state.motors,
        types: state => state.types,
        list: state => state.list,
    }
}
