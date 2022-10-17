<template>
    <button class="button">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;

    border-radius: 8px;
    background-color: #222;
    outline: none;
    color: #fff;
    box-shadow: none;
    border: none;
    cursor: pointer;

    &--circle {
        background-color: transparent;
        padding: 0;
        border-radius: 100%;
        transition: all 0.3s ease-out;
    }
}
</style>
