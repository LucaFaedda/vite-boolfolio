import { createRouter, createWebHistory } from 'vue-router'; 

import AppHomepage from './pages/AppHomepage.vue' // qua ci vanno tutti gli import delle varie pagine che vogliamo richimare con le rotte dentro router-view

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'homepage',
            componenet: AppHomepage
        }

    ]
});

export {router};