<template>
    <form class="todo-edit" @submit.prevent="onSubmit">
        <BaseInput id="title" v-model="task.title" class="todo-edit__title" label="Название" />
        <BaseTextarea
            id="description"
            v-model="task.description"
            class="todo-edit__textarea"
            label="Oписание"
        />

        <div class="todo-edit__buttons">
            <BaseButton class="todo-edit__cancel button--cancel" type="button">Отмена</BaseButton>
            <BaseButton class="todo-edit__submit button" type="submit">Сохранить</BaseButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { ref, watch, type PropType } from 'vue'
import type { ITask } from '@/entities/Task'

const props = defineProps({
    task: {
        type: Object as PropType<ITask | null>,
        default: () => ({}),
    },
})
const emit = defineEmits(['submit'])

const task = ref({
    title: '',
    description: '',
})

const onSubmit = () => {
    emit('submit', task.value)
}

watch(
    () => props.task,
    () => {
        if (props.task) {
            task.value = {
                title: props.task.title,
                description: props.task.description,
            }
        }
    },
)
</script>

<style lang="scss" scoped>
.todo-edit {
    &__title {
        margin-bottom: 30px;
    }

    &__buttons {
        display: flex;
        gap: 20px;

        margin-top: 30px;
    }
}
</style>
