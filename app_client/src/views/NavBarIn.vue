<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/navbar/n-modules-menu'
export default {
  name: 'NavBar',
  data () {
    return {
      title: 'Sistema de Almacen Vehicular'
    }
  },
  components: {
    Menu
  }
}
</script>
