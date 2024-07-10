<template>
    <div class="home grid text-white w-[250px] h-[60px] items-center justify-between profilebox absolute bottom-0 ml-[75px]">
      <div class="grid grid-cols-2 gap-4 flex items-center justify-center unselectable">
          <img class="w-[40px] h-[40px] rounded-full ml-[10px]" :src="currentUser.photoURL" alt="ingen bild">
          <p>{{ currentUser.displayName ?? "null" }}</p>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import { useCurrentUser } from 'vuefire';
  
  export default {
    name: 'ProfileBox',
    data() {
      return {
        currentUser: {},
      }
    },
    mounted() {
      this.currentUser = useCurrentUser();
    },
    components: {
    }
  }
  </script>
  