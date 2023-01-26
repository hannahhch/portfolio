import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/MainView.vue';
import Resume from '@/views/ResumeView.vue';
import Projects from '@/views/ProjectsView.vue';
import Project from '@/views/ProjectView.vue';
import Lessons from '@/views/LessonsView.vue';

const routes = [
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
      path: '/projects',
      component: Projects
    },
    {
      path: '/projects/:id',
      component: Project
    },
    {
      path: '/lessons',
      component: Lessons
    }

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
