<template>
    <div class="todo">
        <div class="todo__head">
            <BasePageTitle class="todo__title">Список задач</BasePageTitle>

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

        <RouterLink class="todo__link button" to="/create">
            <IconPlus class="todo__link-icon base-icon" />
            Добавить
        </RouterLink>

        <TodoList class="todo__list" />
    </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/Todo/TodoList.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { ref } from 'vue'
import BasePageTitle from '@/components/base/BasePageTitle.vue'

type Statuses = 'all' | 'done' | 'undone'
const currentFilter = ref<Statuses>('all')
const statuses = [
    { status: 'all', text: 'Все' },
    { status: 'done', text: 'Выполненные' },
    { status: 'undone', text: 'Невыполненные' },
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
    }

    &__title {}

    &__status-buttons {}

    &__status-button {
        background-color: transparent;


        &--active {
            background-color: var(--color-theme-orange);
            color: var(--color-theme-white);
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
