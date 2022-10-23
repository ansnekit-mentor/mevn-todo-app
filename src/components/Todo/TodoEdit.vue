<template>
    <form class="todo-edit">
        <BaseInput id="title" class="todo-edit__title" label="Название" />
        <BaseTextarea id="description" class="todo-edit__textarea" label="Oписание" />

        <div class="todo-edit__buttons">
            <BaseButton class="todo-edit__cancel button--cancel" type="button">Отмена</BaseButton>
            <BaseButton class="todo-edit__submit button" type="submit">Сохранить</BaseButton>
        </div>
    </form>
</template>

<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseButton from '../base/BaseButton.vue'
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
