export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "about" */ '@/views/home.vue')
    }
]
