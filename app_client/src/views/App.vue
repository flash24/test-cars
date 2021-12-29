<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import { mapGetters } from 'vuex'
const default_layout = 'default'
import DefaultLayout from '@/views/layouts/Default'
import InApp from '@/views/layouts/InApp'
export default {
  components: {
    DefaultLayout,
    InApp
  },
  computed: {
    ...mapGetters({
      token: 'userModule/token'
    }),
    layout () {
      if (this.token) {
        return 'in-app'
      }
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  }
}
</script>
