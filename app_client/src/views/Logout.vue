<template>
  <v-container>
    Logout ...
  </v-container>
</template>
<script>
export default {
  name: 'Logout',
  mounted () {
    localStorage.setItem('data', null)
    window.location = '/login'
  }
}
</script>
