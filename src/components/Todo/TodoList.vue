<template>
    <ul class="todo-list">
        <TodoItem
            v-for="item of list"
            :id="item.id"
            :key="item.id"
            :is-arhived="item.isArchived"
            :title="item.title"
            :done="item.done"
            @change-status="$emit('changeStatus', $event)"
            @archived-task="$emit('archivedTask', $event)"
            @delete-task="$emit('deleteTask', $event)"
            @unahchived-task="$emit('unahchivedTask', $event)"
        />
    </ul>
</template>

<script setup lang="ts">
import TodoItem from '@/components/Todo/TodoItem.vue'
import type { ITask } from '@/entities/Task'
import type { PropType } from 'vue'

defineProps({
    list: {
        type: Array as PropType<ITask[]>,
        default: () => [],
    },
})
defineEmits(['changeStatus', 'deleteTask', 'archivedTask', 'unahchivedTask'])
</script>

<style lang="scss" scoped>
$duration: 0.8s;

.todo-list {
    width: 100%;

    margin: 0;
    padding: 0;
    margin: 0 auto;
    padding: 0;

    font-size: 20px;
    list-style: none;

    &__button {
        margin-bottom: 20px;
    }
}
</style>
