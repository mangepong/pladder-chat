<template>
  <div class="home flex overflow-hidden">
    <server-list @on-server-change="changeServer($event)" @showServerName="showPreview($event)" />
    <profile-box />
    <channel-list :current-server="currentServer" v-if="currentServer" />
    <member-list :current-server="currentServer" v-if="currentServer" />
    <chat-window v-if="currentServer" />
    <div v-if="statePreview" class="z-20 text-white absolute inset-x-0 top-0 text-center mt-[5px]">{{ serverName }}</div>

  </div>
</template>

<script>
import ServerList from '../components/home/ServerList.vue'
import { useCurrentUser, useDatabase, useDatabaseList } from 'vuefire';
import ProfileBox from '../components/home/ProfileBox.vue';
import ChannelList from '../components/home/ChannelList.vue';
import { ref as dbRef } from 'firebase/database'
import MemberList from '../components/home/MemberList.vue';
import ChatWindow from '../components/home/ChatWindow.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      currentUser: {},
      currentServer: {},
      statePreview: false,
      serverName: "",
      addMemberOpen: false,
    }
  },
  async created() {
    this.currentUser = useCurrentUser();
    const db = useDatabase()
    this.currentServer = useDatabaseList(dbRef(db, 'servers/', (this.currentUser.uid + this.currentUser.uid)), { once: true }).value[0];
    await this.$nextTick();
  },
  mounted() {
    console.log(this.currentServer);
  },
  components: {
    ServerList,
    ProfileBox,
    ChannelList,
    MemberList,
    ChatWindow
  },
  methods: {
    async changeServer(server) {
      const db = useDatabase()
      let servers = useDatabaseList(dbRef(db, 'servers/', server.id), { once: true }).value;
      servers.forEach((s) => {
        if (s.id == server.id) {
          this.currentServer = s;
        }
      })
      await this.$nextTick();
    },
    showPreview({ name, state }) {
      this.serverName = name;
      this.statePreview = state;
    },
  }
}
</script>
