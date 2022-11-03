import { createRouter, createWebHistory } from 'vue-router'
import PageTasks from '@/pages/PageTasks.vue'
import PageArchived from '@/pages/PageArchived.vue'
import PageCreateTask from '@/pages/PageCreateTask.vue'
import PageTaskMoreInfo from '@/pages/PageTaskMoreInfo.vue'
import PageTaskEdit from '@/pages/PageTaskEdit.vue'

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
            path: '/new',
            name: 'new',
            component: PageCreateTask,
        },
        {
            path: '/task/:id',
            name: 'taskMore',
            component: PageTaskMoreInfo,
        },
        {
            path: '/task/:id/edit',
            name: 'taskEdit',
            component: PageTaskEdit,
        },
    ],
})

export default router
