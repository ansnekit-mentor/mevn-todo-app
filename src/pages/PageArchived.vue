<template>
    <div class="about">
        <BasePageTitle class="about__title">Архив</BasePageTitle>

        <TodoList class="todo-list--arhived" :is-arhived="true" />
    </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import BasePageTitle from '../components/BasePageTitle.vue'
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
