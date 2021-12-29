<template>
    <v-list nav dense>
        <div v-for="(module, index) in modules" :key="index">
            <v-list-item
                v-if="!module.url"
                :to="module.to"
                class="item-style"
            >
                <v-list-item-icon class="mr-5">
                    <v-icon v-text="module.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-body-1 font-weight-light">
                    {{ $t(module.label) }}
                </v-list-item-title>
            </v-list-item>
            <v-list-item
                v-if="module.url"
                :href="module.url"
                :target="module.target"
                class="item-style"
            >
                <v-list-item-icon class="mr-5">
                    <v-icon v-text="module.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-body-1 font-weight-light">
                    {{ $t(module.label) }}
                </v-list-item-title>
            </v-list-item>
        </div>
    </v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        modules_clean: [
            // { name: 'My profile', link: 'myprofile', icon: 'account-box', label: 'Perfil' },
        ],
        modules: [],
        drawer: true,
        group: null
    }),
    computed: {
        ...mapGetters({
            permissions: 'permissionModule/permission'
        })
    },
    mounted () {
        this.createLinks()
    },
    methods: {
        createLinks () {
            if (this.permissions.module !== undefined) {
                this.modules = JSON.parse(JSON.stringify(this.modules_clean))

                this.permissions.module.forEach(permission => {
                    this.modules.push({
                        name: permission.name,
                        url: permission.url,
                        to: { name: permission.file },
                        label: permission.label,
                        icon: permission.icon,
                        target: permission.url ? '_blank' : null
                    })
                })
            }
        }
    },
    watch: {
        permissions () {
            this.createLinks()
        }
    }
}
</script>
