import { createRouter, createWebHistory } from 'vue-router'
import PageTodoList from '@/pages/PageTodoList.vue'
import PageArchived from '@/pages/PageArchived.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'todoList',
            component: PageTodoList,
        },
        {
            path: '/archived',
            name: 'archived',
            component: PageArchived,
        },
    ],
})

export default router
