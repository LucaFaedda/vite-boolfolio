import { createRouter, createWebHistory } from 'vue-router'; 

import AppHomepage from './pages/AppHomepage.vue' // qua ci vanno tutti gli import delle varie pagine che vogliamo richimare con le rotte dentro router-view
import AppMain from './pages/AppMain.vue' 
import SingleCard from './pages/SingleCard.vue' 

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
            component: AppMain
        },
        {
            path: '/blog/:slug', // mi serve per passargli il parametro slug
            name: 'single-project',
            component: SingleCard
        },

    ]
});

export {router};