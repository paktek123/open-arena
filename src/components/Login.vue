<template>
  <transition name="fade">
    <div>
      <div>{{ loginError }}</div>
      <input ref="username" type="text" placeholder="username" v-model="username">
      <div class="message">{{ validation.firstError('username') }}</div>
      <input ref="password" type="password" placeholder="password" v-model="password">
      <div class="message">{{ validation.firstError('password') }}</div>
      <button ref="loginSubmit" type="submit" @click="login">Login</button>
    </div>
  </transition>
</template>

<script>
  import { Validator } from 'simple-vue-validator'
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
        loginError: ''
      }
    },
    validators: {
      username: function (value) {
        return Validator.value(value).required()
      },
      password: function (value) {
        return Validator.value(value).required()
      }
    },
    methods: {
      login () {
        this.$validate().then((success) => {
          if (success) {
            this.$store.dispatch('login', {
              username: this.username,
              password: this.password
            }).then(() => {
              this.$router.push('/')
            }).catch((error) => {
              this.loginError = error
            })
          }
        })
      }
    }
  }
</script>

<style>

</style>
