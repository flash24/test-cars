require('dotenv').config()
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './views/App.vue'
import store from './store'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueSweetalert2);

new Vue({
  router,
  vuetify: new Vuetify(),
  store,
  render: h => h(App)
}).$mount('#app')
