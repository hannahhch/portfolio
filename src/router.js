import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import(/* webpackChunkName: "resume" */ './views/Resume.vue')
    },
    {
      path: '/projects/:id',
      component: () => import(/* webpackChunkName: "project" */ './views/Project.vue')
    }
  ]
})
