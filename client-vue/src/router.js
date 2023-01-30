import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/average-numbers',
      name: 'averageNumbers',
      component: () => import('@/views/AverageNumbers.vue')

    }
  ]
})
