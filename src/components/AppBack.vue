<template>
    <RouterLink to="/" class="back">
        <IconBack class="back__icon base-icon" />
        Назад
    </RouterLink>
</template>

<script setup lang="ts">
import IconBack from '@/components/icons/IconBack.vue'
</script>

<style lang="scss" scoped>
.back {
    width: max-content;
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 30px;

    &__icon {
        margin-right: 10px;
    }
}
</style>
