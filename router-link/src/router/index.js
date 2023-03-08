import { createRouter, createWebHistory } from 'vue-router'
import Component1 from '../views/Component1.vue'
import Component2 from '../views/Component2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component1',
      name: 'Component1',
      component: Component1
    },
    {
      path: '/component2',
      name: 'Component2',
      component: Component2
    }
  ]
})

export default router
