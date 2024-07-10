<template>
  <div class="home flex">
    <server-list @on-server-change="changeServer($event)" />
    <profile-box />
    <channel-list :current-server="currentServer" v-if="currentServer"/>
    <member-list :current-server="currentServer" v-if="currentServer"/>
    <chat-window v-if="currentServer"/>
  </div>
</template>

<script>
import ServerList from '../components/home/ServerList.vue'
// @ is an alias to /src
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
      currentServer: {}
    }
  },
  async created() {
    this.currentUser = useCurrentUser();
    const db = useDatabase()
    this.currentServer = useDatabaseList(dbRef(db, 'servers/', (this.currentUser.uid + this.currentUser.uid)), {once: true}).value[0];
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
      let servers = useDatabaseList(dbRef(db, 'servers/', (this.currentUser.uid + this.currentUser.uid)), {once: true}).value;

      servers.forEach((s) => {
        if (s.id == server.id) {
          this.currentServer = s;
        }
      })
      await this.$nextTick();
    }
  }
}
</script>
