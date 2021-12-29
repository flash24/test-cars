import { ApiV1 } from '@/api/setting.js'
export default {
    namespaced: true,
    state: {
        token:"",
        user:null
    },
    actions: {
        async getUserInfo({ commit}) {
            const response = await ApiV1.get('userinfo').catch(e => {
                console.error(e)
                return false
            })
            commit('SET_USER', response.data)
            return true
        },
        async login({}, data) {
            const response = await ApiV1.post('login', data).catch(e => {
                console.error(e)
                return false
            })
            commit('SET_TOKEN', response.data.access_token)
            return true
        },
    },
    mutations: {
        SET_USER (state, data) {
            state.user = data
        },
        SET_TOKEN (state, data) {
            state.token = data
        },
    },
    getters: {
        token: state => state.token,
        user: state => state.user,
    }
}
