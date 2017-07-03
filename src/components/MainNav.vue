<template>
  <section>
    <router-link to="/">Home</router-link>
    <router-link ref="login" to="/login" v-if="!isLoggedIn">Login</router-link>
    <a ref="logout" href="#" v-if="isLoggedIn" @click="logout">Logout</a>
  </section>
</template>
<script>
  export default {
    name: 'MainNav',
    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      }
    }
  }
</script>