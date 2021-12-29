<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Acceso</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  autocomplete="off"
                >
                  <v-text-field
                    v-model="user"
                    prepend-icon="person"
                    name="Email"
                    label="Email"
                    type="email"
                    :rules="rules.email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    :rules="rules.user"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="loading"
                  :disabled="loading"
                  color="primary"
                  @click="save()"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      valid: true,
      loading: false,
      password: null,
      user: null,
      rules: {
        email: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido'
        ],
        user: [v => !!v || 'Usuario es requerido']
      }
    }
  },
  methods: {
    async save () {
      this.loading = true
      const valid = this.validate()
      if (valid) {
        const resp = await this.$store.dispatch('userModule/login', {
          email: this.user,
          password: this.password
        })
        if (!resp) {
          this.$swal({
            icon: 'error',
            title: 'Incorrect Login',
            text:
              'Los datos proporcionados son incorrectos'
          })
        }
        if (resp) {
           window.location.href = '/';
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
  }
}
</script>

<style></style>
