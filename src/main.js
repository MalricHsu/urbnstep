import './assets/scss/all.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 還原 cookie 中的 token 到 axios 預設 header（重整後仍帶授權）
useAuthStore().initAuth()

app.mount('#app')
