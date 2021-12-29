<template>
  <v-main class="grey lighten-4">
    <NavBar />
    <slot />
  </v-main>
</template>
<script>
    import NavBar from '@/views/NavBar'
    export default {
        components: {
            NavBar
        }
    }
</script>
