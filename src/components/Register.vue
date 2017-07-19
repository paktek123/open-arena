<template>
  <transition name="fade">
    <div>
      <div>{{ registrationError }}</div>
      <input ref="email" type="email" placeholder="Email" name="email" v-model="email">
      <div class="message">{{ validation.firstError('email') }}</div>
      <input ref="confirmEmail" type="email" placeholder="Confirm Email" name="confirmEmail" v-model="confirmEmail">
      <div class="message">{{ validation.firstError('confirmEmail') }}</div>
      <input ref="username" type="text" placeholder="Username" name="username" v-model="username">
      <div class="message">{{ validation.firstError('username') }}</div>
      <input ref="password" type="password" placeholder="Password" name="password" v-model="password">
      <div class="message">{{ validation.firstError('password') }}</div>
      <button ref="registerSubmit" type="submit" @click="register">Register</button>
    </div>
  </transition>
</template>

<script>
  import { Validator } from 'simple-vue-validator'
  export default {
    name: 'Register',
    data () {
      return {
        email: '',
        confirmEmail: '',
        username: '',
        password: '',
        registrationError: '',
        submitted: false
      }
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email()
      },
      'confirmEmail, email' (confirmEmail, email) {
        if (this.submitted || this.validation.isTouched('confirmEmail')) {
          return Validator.value(confirmEmail).required().match(email)
        }
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
        this.submitted = true
        this.$validate().then((success) => {
          if (success) {
            this.registrationError = ''
            this.$store.dispatch('register', {
              email: this.email,
              username: this.username,
              password: this.password
            }).then(() => {
              this.$router.push('/login')
            }).catch((errors) => {
              this.registrationError = errors
            })
          }
        })
      }
    }
  }
</script>

<style>

</style>
