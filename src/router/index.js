import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/Home.vue'
import Login from 'components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login}
]

export default new VueRouter({routes})
