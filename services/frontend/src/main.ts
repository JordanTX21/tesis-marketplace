import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import IconHome from '@/components/icons/IconHome.vue'
import IconMarket from '@/components/icons/IconMarket.vue'
import IconUser from '@/components/icons/IconUser.vue'

const app = createApp(App)

app.component('IconHome',IconHome)
app.component('IconMarket',IconMarket)
app.component('IconUser',IconUser)

app.use(createPinia())
app.use(router)

app.mount('#app')
