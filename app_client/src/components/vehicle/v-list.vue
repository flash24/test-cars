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
      <v-col cols="4" v-for="item in list" :key="item.name">
        <v-card elevation="2">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-subtitle>
           Tipo: {{item.type.description}}
           <br>
           Motor: {{item.motor.description}}
           <br>
           LLantas : {{item.num_tires}}
          </v-card-subtitle>
          <v-img height="250" src="https://image.shutterstock.com/image-photo/image-front-sports-car-scene-600w-566330083.jpg"></v-img>
          <v-card-text>
            {{item.description}}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" outlined @click="openModalEdit(item)">
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
    <EditModal :lot_data="lotData" :dialog="modalEdit" v-on:close-modal="closeModalEdit()" />
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import NewModal from '@/components/vehicle/modals/v-modal-new'
import EditModal from '@/components/vehicle/modals/v-modal-edit'
export default {
  name: 'VehicleList',
  components: {
    NewModal,
    EditModal
  },
  data () {
    return {
      modalNew: false,
      modalEdit: false,
      lotData: {}
    }
  },
  computed: {
    ...mapGetters({
      list: 'vehicleModule/list'
    })
  },
  mounted () {
    this.$store.dispatch('vehicleModule/getList')
  },
  methods: {
    openModalNew () {
      this.modalNew = true
    },
    openModalEdit (item) {
      this.lotData = item
      this.modalEdit = true
    },
    closeModalNew () {
      this.modalNew = false
      this.$store.dispatch('vehicleModule/getList')
    },
    closeModalEdit () {
      this.modalEdit = false
      this.$store.dispatch('vehicleModule/getList')
    }
  }
}
</script>
