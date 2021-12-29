import axios from 'axios';

// const api_url = process.env.MIX_APP_API_HOST;
const api_url = "http://localhost:8000";
const token = localStorage.getItem('token')
// const token = ""
console.log(token)
const instance = axios.create({
    baseURL: api_url + '/api/',
    headers: {
    	'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    }
});
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    switch (error.response.status) {
        case 401:
            window.location = '/login'
            break
        case 419:
            window.location = '/login'
            break
        default:
            return Promise.reject(error);

    }
});
export const ApiV1 = instance
