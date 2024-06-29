<template>
  <div class="title-bar">
    <div class="title">Pladder</div>
    <div class="dragable-space"></div>
    <button class="minimize" @click="minimizeWindow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
      </svg>
    </button><button class="maximize" @click="sizeWindow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
      </svg>
    </button>
    <button class="close" @click="closeWindow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <router-view />
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    closeWindow() {
      window.close();
    },
    minimizeWindow() {
      window.remote.minimize();
    },
    sizeWindow() {
      if (window.remote.isMaximized()) {
        window.remote.unmaximize()
      } else {
        window.remote.maximize()
      }
    }
  },
};
</script>

<style>
@import "./main.css";
</style>
