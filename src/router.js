import { createRouter, createWebHistory } from 'vue-router'; 

import AppHomepage from './pages/AppHomepage.vue' // qua ci vanno tutti gli import delle varie pagine che vogliamo richimare con le rotte dentro router-view
import ProjectCard from './pages/ProjectCard.vue' 

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'homepage',
            component: AppHomepage
        },
        {
            path: '/blog',
            name: 'progetti',
            component: ProjectCard
        },

    ]
});

export {router};