<template>
  <v-main class="grey lighten-4">
    <NavBarIn />
    <slot />
  </v-main>
</template>
<script>
    import NavBarIn from '@/views/NavBarIn'
    export default {
        components: {
            NavBarIn
        }
    }
</script>
