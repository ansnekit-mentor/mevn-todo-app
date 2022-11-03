<template>
    <div class="create-task">
        <BaseBack class="create-task__back" />

        <BasePageTitle class="create-task__header">Создать задачу</BasePageTitle>

        <TodoEdit class="create-task__todo-form" @submit="onCreate" />
    </div>
</template>

<script setup lang="ts">
import BasePageTitle from '@/components/base/BasePageTitle.vue'
import TodoEdit from '@/components/Todo/TodoEdit.vue'
import BaseBack from '@/components/base/BaseBack.vue'
import { createTask } from '@/service/TaskService'
import { useRouter } from 'vue-router'
import type { IBaseTask } from '@/entities/Task'

const router = useRouter()

const onCreate = async (task: { title: string; description: string }) => {
    const newTask: IBaseTask = {
        title: task.title,
        description: task.description,
        done: false,
        archived: false,
    }
    await createTask(newTask)

    router.push({ name: 'tasks' })
}
</script>

<style lang="scss" scoped>
.create-task {
    width: 700px;

    &__header {
        margin-bottom: 80px;
    }

    &__back {
        margin-bottom: 20px;
    }
}
</style>
