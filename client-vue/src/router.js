import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [

    {
      path: '/private/',
      name: 'home',
      component: () => import('@/views/Home.vue')},
    {
      path: '/private/users',
      name: 'users',
      component: () => import('@/views/UsersTop.vue')

    }
  ]
})
