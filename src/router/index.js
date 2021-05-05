import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  },
  {
    path: '/password',
    component: () => import('@/views/Password'),
    children: [
      {
        path: 'request-recovery-password',
        name: 'RequestRecoverPassword',
        component: () => import('@/views/RequestResetPassword')
      },
      {
        path: 'reset/:code',
        name: 'ResetPassword',
        component: () => import('@/views/ResetPassword')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
