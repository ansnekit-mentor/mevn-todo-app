<template>
    <button class="button">
        <div v-if="$slots.icon" class="button__icon">
            <slot name="icon" />
        </div>

        <div v-if="$slots.default">
            <slot />
        </div>
    </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.button {
    &__icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
}
</style>
