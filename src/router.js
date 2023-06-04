import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectShow from './pages/ProjectShow.vue';


const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'homePage',
            component: AppHome,
        },

        {
            path: '/about-us',
            name: 'aboutUsPage',
            component: AppAbout,
        },

        {
            path: '/projects',
            name: 'projectsIndexPage',
            component: ProjectsIndex,
        },

        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectShow,

        },

    ],

});

export { router };