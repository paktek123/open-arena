import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/Home.vue'
import Login from 'components/Login.vue'
import Register from 'components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register}
]

export default new VueRouter({routes})
