<template>
    <div class="edit-task">
        <BaseBack class="edit-task__back" />

        <BasePageTitle class="edit-task__header">Редактировать задачу</BasePageTitle>

        <TodoEdit class="edit-task__todo-form" :task="task" @submit="onEdit" />
    </div>
</template>

<script setup lang="ts">
import BaseBack from '@/components/base/BaseBack.vue'
import BasePageTitle from '@/components/base/BasePageTitle.vue'
import TodoEdit from '@/components/Todo/TodoEdit.vue'
import useTasks from '@/composables/useTasks'
import type { IBaseTask } from '@/entities/Task'
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { updateTask } from '@/service/TaskService'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id.toString() ?? '')

const { task, fetchTask } = useTasks()

onMounted(async () => {
    if (id.value) {
        await fetchTask(id.value)
    }
})

const onEdit = async (payloadTask: { title: string; description: string }) => {
    if (task.value) {
        const newTask: IBaseTask = {
            title: payloadTask.title,
            description: payloadTask.description,
            done: task.value.done,
            archived: task.value.archived,
        }

        await updateTask(id.value, newTask)
    }

    router.push({ path: `/task/${id.value}` })
}
</script>

<style lang="scss" scoped>
.edit-task {
    width: 700px;

    &__header {
        margin-bottom: 80px;
    }

    &__back {
        margin-bottom: 20px;
    }
}
</style>
