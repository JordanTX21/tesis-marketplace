export default {
    name: 'market',
    component: () => import('../layouts/MarketLayout.vue'),
    children: [
        {
            path: '',
            name: 'market',
            component: () => import('../views/MarketView.vue')
        },
    ]
}