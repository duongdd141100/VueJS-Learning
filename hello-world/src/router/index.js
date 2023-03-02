import { createRouter, createWebHistory } from 'vue-router'
import HelloWordView from '../views/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWordView
    }
  ]
})

export default router
