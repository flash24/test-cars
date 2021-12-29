import axios from 'axios';
import store from '@/store/index.js'

// const api_url = process.env.MIX_APP_API_HOST;
const api_url = "http://localhost:8000";
console.log(store)
// const token = store.state.userModule.token
const token = ""
export const ApiV1 = axios.create({
    baseURL: api_url + '/',
    headers: {
    	'accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});
