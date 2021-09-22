import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '@/pages/SignUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "LogIn" */ '@/pages/LogIn')
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => import(/* webpackChunkName: "ForgetPassword" */ '@/pages/ForgetPassword')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
