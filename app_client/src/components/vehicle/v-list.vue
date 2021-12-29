<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="success" class="mr-4" @click="openModalNew()">
          <v-icon left>
            mdi-plus
          </v-icon>
          Nuevo
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="n in 4" :key="n">
        <v-card elevation="2">
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-subtitle>
            Tipo Vehiculo
          </v-card-subtitle>
          <v-img height="250" src="https://random.imagecdn.app/500/300"></v-img>
          <v-card-text>
            description
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" outlined>
              Editar
              <v-icon left>
                mdi-pencil
              </v-icon>
            </v-btn>

            <v-btn color="error" outlined>
              Eliminar
              <v-icon left>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <NewModal :dialog="modalNew" v-on:close-modal="closeModalNew()" />
  </v-container>
</template>
<script>
import NewModal from '@/components/vehicle/modals/v-modal-new'
export default {
  name: 'VehicleList',
  components: {
    NewModal
  },
  data () {
    return {
      modalNew: false
    }
  },
  mounted () {},
  methods: {
    openModalNew () {
        this.modalNew = true
    },
    closeModalNew () {
      this.modalNew = false
      //   this.reloadList()
    }
  }
}
</script>
