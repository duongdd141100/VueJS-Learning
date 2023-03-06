import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HelloWorldView from '../views/HelloWorld.vue'
import ListRenderingView from '../views/ListRendering.vue'
import EventHandlingView from '../views/EventHandling.vue'

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
        },
        {
            path: '/list-rendering',
            name: 'list rendering',
            component: ListRenderingView
        },
        {
            path: '/event-handling',
            name: 'event handling',
            component: EventHandlingView
        }
    ]
});

export default router;