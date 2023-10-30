import {createRouter,createWebHistory} from 'vue-router'

import mainvue from '@/views/MainView.vue'
import payement from '@/views/PayementView.vue'


const routes= [

    {
        path:'/',
        name:'boutique',
        component: mainvue
    },

    {
        path:'/payement',
        name:'payement',
        component: payement
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;

