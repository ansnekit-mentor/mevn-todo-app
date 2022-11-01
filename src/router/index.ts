import { createRouter, createWebHistory } from 'vue-router'
import PageTasks from '@/pages/PageTasks.vue'
import PageArchived from '@/pages/PageArchived.vue'
import PageCreateTask from '@/pages/PageCreateTask.vue'
import PageTaskMoreInfo from '@/pages/PageTaskMoreInfo.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'tasks',
            component: PageTasks,
        },
        {
            path: '/archived',
            name: 'archived',
            component: PageArchived,
        },
        {
            path: '/create',
            name: 'create',
            component: PageCreateTask,
        },
        {
            path: '/task/:id',
            name: 'taskMore',
            component: PageTaskMoreInfo,
        },
    ],
})

export default router
