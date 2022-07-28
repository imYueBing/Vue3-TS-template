import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        { path: '/home', redirect: '/home/counter' },
        { path: 'counter', component: () => import('@/views/CounterView.vue') }
      ]
    },
    { path: '/about', component: () => import('@/views/AboutView.vue') }
  ]
})

export default router
