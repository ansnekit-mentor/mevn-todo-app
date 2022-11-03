<template>
    <section class="todo-more">
        <h1 class="todo-more__title">
            {{ task.title }}
        </h1>
        <p class="todo-more__description">
            {{ task.description }}
        </p>
        <BaseButton class="todo-more__status-btn button" @click="$emit('changeStatus', task.id)">{{
            task.done === true ? 'Выполнено' : 'Невыполнено'
        }}</BaseButton>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import type { ITask } from '@/entities/Task'
import type { PropType } from 'vue'

defineProps({
    task: {
        type: Object as PropType<ITask>,
        default: () => ({}),
    },
})

defineEmits(['changeStatus'])
</script>

<style lang="scss" scoped>
.todo-more {
    position: relative;
    width: 100%;
    max-width: 800px;
    padding: 40px;
    border-radius: 12px;

    background-color: var(--color-theme-black);

    &__title {
        font-size: 24px;
        line-height: 28px;

        padding-right: 140px;

        margin-bottom: 30px;
    }

    &__description {
        font-size: 16px;
        line-height: 24px;
    }

    &__status-btn {
        position: absolute;
        top: 35px;
        right: 35px;
        z-index: 2;
    }
}
</style>
