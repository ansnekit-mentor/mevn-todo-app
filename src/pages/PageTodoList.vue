<template>
    <div class="todo">
        <div class="todo__head">
            <div class="todo__head-wrap flex-align-center">
                <IconList class="todo__head-icon base-icon" />
                <h1 class="todo__title">To do list</h1>
            </div>

            <div class="todo__status-buttons flex-align-center">
                <BaseButton
                    v-for="(button, idx) in statuses"
                    :key="idx"
                    class="todo__status-button"
                    :class="{ 'todo__status-button--active': button.status === currentFilter }"
                    @click="changeFilter(button.status as Statuses)"
                    >{{ button.text }}</BaseButton
                >
            </div>
        </div>

        <RouterLink class="todo__link button" to="/create-task">
            <IconPlus class="todo__link-icon base-icon" />
            Add new task
        </RouterLink>
        <TodoList class="todo__list" />
    </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconList from '../components/icons/IconList.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref } from 'vue'

type Statuses = 'all' | 'done' | 'undone'
const currentFilter = ref<Statuses>('all')
const statuses = [
    { status: 'all', text: 'All' },
    { status: 'done', text: 'Done' },
    { status: 'undone', text: 'Undone' },
]

const changeFilter = (status: Statuses) => (currentFilter.value = status)
</script>

<style lang="scss" scoped>
.todo {
    display: flex;
    flex-direction: column;

    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 100px;

        &-icon {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }

    &__title {
        font-size: 26px;
        line-height: 32px;
        text-transform: uppercase;
    }

    &__status-buttons {}

    &__status-button {
        background-color: transparent;

        &--active {
            background-color: var(--color-button-active);
            color: var(--color-text-black);
        }
    }

    &__link {
        width: max-content;
        display: flex;
        justify-content: flex-end;

        margin-left: auto;
        margin-bottom: 20px;

        &-icon {
            margin-right: 8px;
        }
    }
    &__list {
    }
}
</style>
