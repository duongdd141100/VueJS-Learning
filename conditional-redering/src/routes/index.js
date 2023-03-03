import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import LoopObject from '../views/LoopObject.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'users',
            component: Users
        },
        {
            path: '/loop-object',
            name: 'loop object',
            component: LoopObject
        }
    ]
})

export default router;