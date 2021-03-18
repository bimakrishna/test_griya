import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import EditBiodataForm from '../components/EditBiodataForm'
import BiodataForm from '../components/BiodataForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Main,
    component: Main
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/form',
    name: BiodataForm,
    component: BiodataForm
  },
  {
    path: '/:id',
    name: 'EditBiodataForm',
    component: EditBiodataForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
