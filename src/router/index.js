import Vue from 'vue'
import VueRouter from 'vue-router'

import { getToken } from '@/services/storage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    return next({ name: 'Login' })
  } else if (!to.matched.some(record => record.meta.requiresAuth) && token) {
    return next({ name: 'Home' })
  }
  return next()
})

export default router
