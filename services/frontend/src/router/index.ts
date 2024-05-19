import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthRoutes from '@/modules/auth/router'
import MarketRoutes from '@/modules/market/router'
import ProfileRoutes from '@/modules/profile/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      ...AuthRoutes
    },
    {
      path: '/market',
      ...MarketRoutes
    },
    {
      path: '/profile',
      ...ProfileRoutes
    },
  ]
})

export default router
