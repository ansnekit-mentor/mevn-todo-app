<template>
    <div class="create-task">
        <BaseBack class="create-task__back" />

        <BasePageTitle class="create-task__header">Создать задачу</BasePageTitle>

        <TodoEdit class="create-task__todo-form" />
    </div>
</template>

<script setup lang="ts">
import BasePageTitle from '@/components/base/BasePageTitle.vue'
import TodoEdit from '@/components/Todo/TodoEdit.vue'
import BaseBack from '@/components/base/BaseBack.vue'
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
