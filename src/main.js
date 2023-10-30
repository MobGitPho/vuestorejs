//import './assets/main.css'
import './assets/index.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue' 
import router from '@/router'

//createApp(App).use(createPinia()).mount('#app')
const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')