<template>
    <div class="about">
        <h1 class="about__title">Архив</h1>

        <TodoList class="todo-list--arhived" :is-arhived="true" />
    </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;

    &__title {
        margin-bottom: 30px;
    }
}
</style>
