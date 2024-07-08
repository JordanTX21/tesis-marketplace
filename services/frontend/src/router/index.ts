import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from '@/modules/auth/router'
import MarketRoutes from '@/modules/market/router'
import ProfileRoutes from '@/modules/profile/router'
import InboxRoutes from '@/modules/inbox/router'
import CheckoutRoutes from '@/modules/checkout/router'
import { useLoginStore } from '@/modules/auth/stores/login'

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
          component: () => import('@/views/HomeView.vue')
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
      ],
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      ...AuthRoutes
    },
    {
      path: '/product/:code',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
      meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = useLoginStore().isLoggedIn;

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al login
    next({ name: 'login' }); // Cambia 'login' por el nombre de tu ruta de login
  } else {
    next(); // Continúa navegando a la siguiente ruta
  }
});

export default router
