<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-form ref="form" lazy-validation>
        <v-card>
          <v-card-title>
            <span class="text-h5">Nuevo Vehiculo</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Nombre del Vehiculo"
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Descripcion del vehiculo"
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="tipo de vehiculo"
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="tipo de motor"
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="numero de llantas"
                    type="text"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="gray darken-1" v-on:click="$emit('close-modal')">
              Cancelar
            </v-btn>
            <v-btn
              color="blue darken-1 white--text"
              @click="save()"
              :loading="loading"
              :disabled="loading"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async save () {}
  }
}
</script>
