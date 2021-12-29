<template>
  <v-navigation-drawer class="bg-black" app dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
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
        { title: 'Login', icon: 'mdi-view-dashboard', target:"/login", url:"/login" },
      ],
      right: null
    }
  }
}
</script>
