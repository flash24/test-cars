<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Listado de Vehiculos</h1>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="4" v-for="n in 4" :key="n">
          <v-card elevation="2">
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-subtitle>
              Tipo Vehiculo
            </v-card-subtitle>
            <v-card-text>
              description
            </v-card-text>
            <v-card-actions>
              <v-btn color="green">
                Editar
              </v-btn>

              <v-btn color="red">
                Elimar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
