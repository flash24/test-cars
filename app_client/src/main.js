require('./bootstrap');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
// import App from './App.vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  vuetify: new Vuetify(),
  store,
  render: h => h(App)
}).$mount('#app')
