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
                <div class="pt-3 w-4/5" @mouseenter="renderServerName(server.serverName, true)"
                    @mouseleave="renderServerName(server.serverName, false)">
                    <img :src="server.logo" class="border serverlist-icons" @click="changeServer(server)">
                </div>
            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <div class="pt-3 w-4/5">
                    <img src="../../assets/serverIcons/add-icon.png" class="border border-transparent add-server-icon"
                        @click="createServer()">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
import { getDatabase, ref, push, set, update } from "firebase/database";
import { useDatabaseList, useDatabase, useCurrentUser } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
// import { ref as dbRef } from 'firebase/database'
export default {
    name: 'ServerList',
    components: {},
    data() {
        return {
            currentUser: useCurrentUser(),
            serverList: [],
            db: useDatabase(),
            showServerName: false,
            serverPreviewName: "",
            userData: {},
        }
    },
    mounted() {
        const db = useDatabase()
        this.serverList = useDatabaseList(dbRef(db, 'servers'))
    },
    computed: {
        serversExist() {
            return this.serverList.length >= 1;
        }
    },
    methods: {
        changeServer(server) {
            this.$emit("onServerChange", server)
            // console.log(server)
        },
        addServer() {
            // ska öppna en modal för att skapa en server
        },
        renderServerName(name, state) {
            this.$emit("showServerName", { name, state })
        },
        createServer(serverName = this.currentUser.displayName + "'s Server") {
            const db = getDatabase();
            const postListRef = ref(db, 'servers');
            const newPostRef = push(postListRef);
            const serverid = newPostRef["_path"]["pieces_"][1];
            set(newPostRef, {
                id: serverid,
                serverName: serverName,
                owner: this.currentUser.uid,
                members: [JSON.stringify(this.currentUser)],
                textChannels: [{ id: "0", name: "Text Channel 1" }, { id: "1", name: "Text Channel 2" }],
                voiceChannels: [{ id: "0", name: "Voice Channel 1" }, { id: "1", name: "Voice Channel 2" }],
                logo: "https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/pladder-logo-v2.png?alt=media&token=a3426b1d-688c-4b11-bcb3-cdb21d4f1580",
            });
            this.updateUserServerList(serverid);
        },
        updateUserServerList(serverid) {
            const db = useDatabase()
            let users = useDatabaseList(dbRef(db, 'users/', this.currentUser.uid), { once: true }).value;
            users.forEach((user) => {
                if (JSON.parse(user.data).uid == this.currentUser.uid) {
                    this.userData = user;
                }
            })


            let newServers = this.userData.server ?? [];
            newServers.push(serverid)

            this.userData = { servers: newServers, ...this.userData }

            const postListRef = ref(db, 'users/' + this.userData.id);
            update(postListRef, this.userData).then(() => {
                // console.log("updated")
            })
        }
    }
}
</script>