import { ApiV1 } from '@/api/setting.js'
export default {
    namespaced: true,
    state: {
        token:"",
        user:null
    },
    actions: {
        async getUserInfo({ commit}) {
            const response = await ApiV1.get('/userinfo').catch(e => {
                console.error(e)
            })
            console.log(response)
            commit('SET_USER', response)
        },
    },
    mutations: {
        SET_USER (state, data) {
            state.user = data
        },
    },
    getters: {
        token: state => state.token,
        user: state => state.user,
    }
}
