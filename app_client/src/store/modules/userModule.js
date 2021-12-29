import { ApiV1 } from '@/api/setting.js'
export default {
    namespaced: true,
    state: {
        token: "",
        user: null
    },
    actions: {
        async getUserInfo({ commit }) {
            const response = await ApiV1.get('userinfo').catch(e => {
                console.log("error")
                console.error(e)
                return false
            })
            commit('SET_USER', response.data)
            return true
        },
        async login({ commit }, data) {
            const response = await ApiV1.post('login', data).catch(e => {
                console.error(e)
                return false
            })
            try {
                commit('SET_TOKEN', response.data.access_token)
                return true
            } catch (error) {
                return false
            }

        },
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data
        },
        SET_TOKEN(state, data) {
            localStorage.setItem('token', data);
            state.token = data
        },
    },
    getters: {
        token: state => state.token,
        user: state => state.user,
    }
}
