<template>
  <div class="home flex">
    <server-list/>
    <div class="mx-auto">
      {{ currentUser.displayName ?? "null" }}
      <img class="w-[50px]" :src="currentUser.photoURL" alt="ingen bild"> 
    </div>
  </div>
</template>

<script>
import ServerList from '../components/home/ServerList.vue'
// @ is an alias to /src
import { useCurrentUser } from 'vuefire';

export default {
  name: 'HomeView',
  data() {
    return {
      currentUser: useCurrentUser(),
    }
  },
  components: {
    ServerList
  }
}
</script>
