<template>
  <div class="title-bar">
    <div class="title">Pladder</div>
    <div class="dragable-space"></div>
    <button class="close" @click="closeWindow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    closeWindow() {
      // Close the Electron window
      window.close();
    },
  },
};
</script>

<style>
@import "./main.css";
</style>
