export default {
    name: 'profile',
    component: () => import('../layouts/ProfileLayout.vue'),
    children: [
        {
            path: '',
            name: 'profile',
            component: () => import('../views/ProfileView.vue')
        },
    ]
}