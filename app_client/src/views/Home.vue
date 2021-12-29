<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Listado de Vehiculos</h1>
      </v-col>
    </v-row>
    <List/>
  </v-container>
</template>
<script>
// @ is an alias to /src
import List from '@/components/vehicle/v-list'
export default {
  name: 'Home',
  components: {
    List
  }
}
</script>
