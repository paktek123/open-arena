<template>
  <transition name="fade">
    <form ref="loginForm" @submit.prevent="login({ username, password })">
      <input ref="username" type="text" placeholder="username" v-model="username">
      <input ref="password" type="password" placeholder="password" v-model="password">
      <button ref="loginSubmit" type="submit">Login</button>
    </form>
  </transition>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style>

</style>
