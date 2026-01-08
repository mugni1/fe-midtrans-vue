import './assets/main.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'vue-sonner/style.css'


import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useColorMode } from '@vueuse/core'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)


useColorMode()
app.mount('#app')
