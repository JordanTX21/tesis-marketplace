import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthRoutes from '@/modules/auth/router'
import MarketRoutes from '@/modules/market/router'
import ProfileRoutes from '@/modules/profile/router'
import InboxRoutes from '@/modules/inbox/router'
import CheckoutRoutes from '@/modules/checkout/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('@/components/layouts/HomeLayout.vue'),
      children: [
        {
          path: '',
          name: 'home_home',
          component: HomeView
        },
        {
          path: 'market',
          ...MarketRoutes
        },
        {
          path: 'profile',
          ...ProfileRoutes
        },
        {
          path: 'store/:id',
          name: 'store',
          component: () => import('@/modules/market/views/StoreView.vue')
        },
      ]
    },
    {
      path: '/auth',
      ...AuthRoutes
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/inbox',
      ...InboxRoutes
    },
    {
      path: '/checkout',
      ...CheckoutRoutes
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // Si hay una posición guardada, vuelve a esa posición
    if (savedPosition) {
      return savedPosition;
    } else {
      // De lo contrario, desplázate al principio de la página
      return { top: 0, behavior: 'smooth' };
    }
  }
})

export default router
