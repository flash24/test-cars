import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    // await store.dispatch('permissionModule/getPermissions');
    // store.dispatch('clientModule/getInfo')

    if (to.name != 'Login') {

      await store.dispatch('userModule/getUserInfo');
      // next();
    }
    next();
  } catch (error) {
    next();
  }

});

export default router
