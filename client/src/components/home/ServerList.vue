<template>
    <div class="w-[75px] fullHeight border primaryColor border-transparent">
        <div class="flex justify-center pb-3">
            <img src="../../assets/pladder-logo-v2.png" class="border serverlist-icons w-4/5">
        </div>
        <div class="flex justify-center">
            <hr class="divider-servers w-1/2">
        </div>
        <div v-if="serversExist">
            <div v-for="server in serverList" :key="server.id" class="flex justify-center">
                <!-- {{ server.name }} -->
                  <div class="pt-3 w-4/5">
                      <img src="../../assets/serverIcons/parkering.png" class="border serverlist-icons" @click="renderServer(server)">
                  </div>
            </div>
        </div>
        <div v-else>
            <div class="flex justify-center">
                  <div class="pt-3 w-4/5">
                      <img src="../../assets/serverIcons/add-icon.png" class="border border-transparent add-server-icon" @click="addServer()">
                  </div>
            </div>
        </div>
    </div>
</template>

<script >
// @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'

import { useCurrentUser } from 'vuefire'

export default {
    name: 'ServerList',
    components: {},
    data() {
        return {
            currentUser: useCurrentUser(),
            serverList: [],
        }
    },
    computed: {
        serversExist() {
            return this.serverList.length >= 1;
        }
    },
    methods: {
        renderServer(server) {
            console.log(server)
        },
        addServer() {
            console.log(this.currentUser.email);
        }
    }
}
</script>