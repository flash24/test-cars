<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
    const default_layout = 'default';
    import DefaultLayout from '@/views/layouts/Default'
    export default {
        components: {
            DefaultLayout
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || default_layout) + '-layout';
            }
        }
    }
</script>
