import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '@/views/SuccessView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import DetailGameView from '@/views/DetailGameView.vue'
import DetailOrderView from '@/views/DetailOrderView.vue'

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
    { path: '/games/:id', name: 'games', component: DetailGameView },
    { path: '/detail-order', name: 'detail_order', component: DetailOrderView },
    { path: '/success', name: 'payment_success', component: SuccessView },
    { path: '/:pathMatch(.*)*', name: 'not_found', component: NotFoundView },
  ],
})

export default router
