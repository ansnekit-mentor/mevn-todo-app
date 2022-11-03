import { computed } from 'vue';
<template>
    <div class="base-textarea">
        <label :for="id" class="base-textarea__label">{{ label }}</label>
        <textarea
            :id="id"
            class="base-textarea__textarea"
            rows="9"
            maxlength="500"
            v-bind="$attrs"
            :value="modelValue"
            @input="onTextarea"
        ></textarea>
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
    modelValue: {
        type: String,
        default: '',
    },
})
const emit = defineEmits(['update:modelValue'])

const onTextarea = (evt: Event) => {
    const target = evt.target as HTMLInputElement
    if (target) {
        emit('update:modelValue', target.value)
    }
}
</script>

<style lang="scss" scoped>
.base-textarea {
    display: flex;
    flex-direction: column;

    &__label {
        font-size: 20px;
        line-height: 24px;

        margin-bottom: 10px;
    }

    &__textarea {
        width: 100%;
        padding: 20px;
        background-color: var(--color-theme-yellow);
        color: var(--color-theme-black);
        border-radius: 12px;
        border: none;
        margin: 0;
        outline: none;

        resize: none;

        font-size: 18px;
        line-height: 20px;
    }
}
</style>
