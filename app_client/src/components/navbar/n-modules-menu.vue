<template>
  <v-navigation-drawer class="bg-black" app dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Menu
        </v-list-item-title>
        <v-list-item-subtitle>
          Inventarios
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :href="item.url">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { title: 'Inventario', icon: 'mdi-view-dashboard', target:"/", url:"/"},
        { title: 'Logout', icon: 'mdi-logout', target:"/logout", url:"/logout" },
      ],
      right: null
    }
  }
}
</script>
