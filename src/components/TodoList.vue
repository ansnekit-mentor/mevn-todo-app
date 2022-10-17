<template>
    <ul class="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </ul>
</template>

<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
</script>

<style lang="scss" scoped>
$duration: 0.8s;

.todo-list {
    width: 600px;
    margin: 0 auto;
    padding: 0;
    font-size: 20px;
}
</style>
