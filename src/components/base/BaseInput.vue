<template>
    <div class="base-input">
        <label :for="id" class="base-input__label">{{ label }}</label>
        <input :id="id" type="text" class="base-input__input" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: {
        type: String,
        default: '',
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
})
</script>

<style lang="scss" scoped>
.base-input {
    display: flex;
    flex-direction: column;

    &__label {
        font-size: 20px;
        line-height: 24px;

        margin-bottom: 10px;
    }

    &__input {
        width: 100%;
        padding: 20px;
        background-color: var(--color-theme-yellow);
        color: var(--color-theme-black);
        border-radius: 12px;
        border: none;
        margin: 0;
        outline: none;

        font-size: 18px;
        line-height: 20px;
    }
}
</style>
