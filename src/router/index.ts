import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '@/views/SuccessView.vue'
import CoView from '@/views/CoView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },

  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/co', name: 'co_view', component: CoView },
    { path: '/success', name: 'payment_success', component: SuccessView },
    { path: '/:pathMatch(.*)*', name: 'not_found', component: NotFoundView },
  ],
})

export default router
