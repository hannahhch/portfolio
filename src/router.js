import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import Resume from './views/Resume.vue'
import Project from './views/Project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '*',
    //   component: NotFoundComponent
    // },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/projects/:id',
      component: Project
    }
  ]
})
