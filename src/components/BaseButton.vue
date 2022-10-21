<template>
    <button class="button">
        <div v-if="$slots.icon" class="button__icon base-icon">
            <slot name="icon" />
        </div>

        <div v-if="$slots.default">
            <slot />
        </div>
    </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
