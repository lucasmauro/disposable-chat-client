import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('@/views/RoomView.vue'),
      beforeEnter: (to, from, next) => {
        from.name === 'home' ? next() : next({ name: 'home' })
      }
    }
  ]
})

export default router
