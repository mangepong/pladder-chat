<template>
    <div class="h-screen flex items-center justify-center">
        <img src="../assets/pladder-logo.png"/>
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
  