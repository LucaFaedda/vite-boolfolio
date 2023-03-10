import { createRouter, createWebHistory } from 'vue-router'; 

import AppHomepage from './pages/AppHomepage.vue' // qua ci vanno tutti gli import delle varie pagine che vogliamo richimare con le rotte dentro router-view
import AppMain from './pages/AppMain.vue' 

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

    ]
});

export {router};