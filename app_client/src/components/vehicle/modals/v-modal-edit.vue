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
                    v-model="name"
                    label="Nombre del Vehiculo"
                    type="text"
                    :rules="[v => !!v || 'La nombre es requerido']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="description"
                    label="Descripcion del vehiculo"
                    type="text"
                    :rules="[v => !!v || 'La descripcion es requerida']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="type"
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
                    v-model="motor"
                    :items="motors"
                    label="Tipo de motor"
                    item-text="description"
                    item-value="id"
                    required
                    :rules="[v => !!v || 'El tipo de motor es requerido']"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="num_tires"
                    :items="[2, 3, 4]"
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
    },
    lot_data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      name: null,
      description: null,
      type: null,
      motor: null,
      num_tires: null
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
    this.loadData()
  },
  methods: {
    async loadData () {
      this.name = this.lot_data.name
      this.description = this.lot_data.description
      this.type = this.lot_data.type_id
      this.motor = this.lot_data.motor_id
      this.num_tires = this.lot_data.num_tires
    },
    async save () {
      this.loading = true
      const valid = this.validate()
      if (valid) {
        const resp = await this.$store.dispatch('vehicleModule/updateVehicle', {
          id: this.lot_data.id,
          name: this.name,
          description: this.description,
          type: this.type,
          motor: this.motor,
          num_tires: this.num_tires
        })
        if (!resp) {
          this.$swal({
            icon: 'error',
            title: 'Incorrect data',
            text: 'Los datos proporcionados son incorrectos'
          })
        }
        if (resp) {
          this.$swal({
            icon: 'success',
            title: 'Exito',
            text: 'Los datos se han guardado con exito'
          })
          this.loading = false
          this.form = {}
          this.$emit('close-modal')
        }
      }
      this.loading = false
    },
    validate () {
      return this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  },
  watch: {
    dialog: function (val) {
      if (val) {
        this.loadData()
      }
    }
  }
}
</script>
