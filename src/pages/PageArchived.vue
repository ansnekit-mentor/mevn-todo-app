<template>
    <div class="about">
        <BasePageTitle class="about__title">Архив</BasePageTitle>

        <TodoList
            class="todo-list--arhived"
            :tasks="archivedTask"
            @unahchived-task="onChangeStatus($event, 'archived')"
        />
    </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/Todo/TodoList.vue'
import BasePageTitle from '@/components/base/BasePageTitle.vue'
import useTasks from '../composables/useTasks'
import { onMounted } from 'vue'

const { archivedTask, fetchTasks, onChangeStatus } = useTasks()

onMounted(async () => {
    await fetchTasks()
})
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &__title {
        margin-bottom: 70px;
    }
}
</style>
