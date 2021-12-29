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
                  <v-select
                    :items="types"
                    label="Tipo de vehiculo"
                    item-text="description"
                    item-value="id"
                    required
                    :rules="[v => !!v || 'El tipo de vehiculo es requerido']"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    :items="motors"
                    label="Tipo de motor"
                    item-text="description"
                    item-value="id"
                    required
                    :rules="[v => !!v || 'El tipo de vehiculo es requerido']"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    :items="[2,3,4]"
                    label="Numero de llantas"
                    required
                    :rules="[v => !!v || 'El numero de llanta es requerido']"
                  ></v-select>
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
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      motors: 'vehicleModule/motors',
      types: 'vehicleModule/types'
    })
  },
  mounted () {
    this.$store.dispatch('vehicleModule/getCatMotors')
    this.$store.dispatch('vehicleModule/getCatTypes')
  },
  methods: {
    async save () {}
  }
}
</script>
