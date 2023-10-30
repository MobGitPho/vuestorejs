import {createRouter,createWebHistory} from 'vue-router'

import mainvue from '@/views/MainView.vue'
import payement from '@/views/PayementView.vue'


const routes= [

    {
        path:'/vuestorejs/',
       // name:'boutik',
        component: mainvue
    },

    {
        path:'/vuestorejs/payement',
        name:'payement',
        component: payement
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;

