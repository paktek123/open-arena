<template>
  <transition name="fade">
    <form ref="registerForm" @submit.prevent="register">
      <input ref="email" type="email" placeholder="Email" name="email" v-model="email">
      <div class="message">{{ validation.firstError('email') }}</div>
      <input ref="username" type="text" placeholder="Username" name="username" v-model="username">
      <div class="message">{{ validation.firstError('username') }}</div>
      <input ref="password" type="password" placeholder="Password" name="password" v-model="password">
      <div class="message">{{ validation.firstError('password') }}</div>
      <button ref="registerSubmit" type="submit">Register</button>
    </form>
  </transition>
</template>

<script>
  import { Validator } from 'simple-vue-validator'
  export default {
    name: 'Register',
    data () {
      return {
        email: '',
        username: '',
        password: '',
        registrationErrors: []
      }
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email()
      },
      username: function (value) {
        return Validator.value(value).required()
      },
      password: function (value) {
        return Validator.value(value).required()
      }
    },
    methods: {
      register () {
        this.$validate().then((success) => {
          if (success) {
            this.$store.dispatch('register', {
              email: this.email,
              username: this.username,
              password: this.password
            }).then(() => {
              this.$router.push('/home')
            }).catch((errors) => {
              this.registrationErrors = errors
            })
          }
        })
      }
    }
  }
</script>

<style>

</style>
