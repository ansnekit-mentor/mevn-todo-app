<template>
    <div class="todo">
        <RouterLink class="todo__link" to="/create-task">
            <BaseButton class="todo__button">
                <template #icon>
                    <IconPlus class="todo__button-icon" />
                </template>
                Add new task
            </BaseButton>
        </RouterLink>
        <TodoList class="todo__list" />
    </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import BaseButton from '@/components/BaseButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
</script>

<style lang="scss" scoped>
.todo {
    display: flex;
    flex-direction: column;

    &__link {
        display: inline-flex;
        justify-content: flex-end;

        margin-bottom: 20px;

        &:hover {
            background-color: transparent;
        }
    }

    &__button {
        &-icon {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }
    }
    &__list {
    }
}
</style>
