import Vue from 'vue'
import Router from 'vue-router'

const UserTop = () => import('@/views/UserTop.vue')

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/private/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/private/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/private/users',
      name: 'users',
      component: () => import('@/views/UsersTop.vue')
    },
    {
      path: '/private/phones',
      name: 'phones',
      component: () => import('@/views/Phones.vue')
    },
    {
      path: '/private/users/:idPath',
      name: 'userPut',
      component: UserTop
    },
    {
      path: '/private/users/new',
      name: 'userAdd',
      component: UserTop
    }
  ]
})
