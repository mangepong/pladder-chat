<template>
    <div class="h-[calc(100vh-32px)] flex items-center justify-center">
        <!-- <img class="w-2/12" src="../assets/pladder-logo-v2.png"/> -->
        <login-form></login-form>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LoginForm from '@/components/login/LoginForm.vue'
  
  export default {
    name: 'LoginView',
    components: { LoginForm }
  }
  </script>
  