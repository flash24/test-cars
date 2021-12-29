window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    switch (error.response.status) {
        case 401:
            console.log("401")
            window.location = '/login'
            break
        case 419:
            window.location = '/login'
            break
        default:
            return Promise.reject(error);

    }
});
