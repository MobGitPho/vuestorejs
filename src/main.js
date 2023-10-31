//import './assets/main.css'
import './assets/index.css'

import { createPinia } from 'pinia'
import { createApp,watch } from 'vue'
import App from './App.vue' 
import router from '@/router'

//createApp(App).use(createPinia()).mount('#app')
const app = createApp(App);
const pinia=  createPinia();
watch(
   pinia.state,
    (state) => {
        localStorage.setItem("produits", JSON.stringify(state.products));
        localStorage.setItem("article", JSON.stringify(state.panier));
       // state.panier = state.MonPan()  //localStorage.getItem('article');
        
    },
    { deep: true }
);

app.use(createPinia())
app.use(router)
app.mount('#app')