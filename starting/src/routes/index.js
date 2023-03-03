import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HelloWorldView from '../views/HelloWorld.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.ROUTES),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
            name: 'home1',
            component: HomeView
        },
        {
            path: '/hello-world',
            name: 'hello world',
            component: HelloWorldView
        }
    ]
});

export default router;