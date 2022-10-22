<template>
    <div class="page-title flex-align-center">
        <IconList class="page-title__icon base-icon" />
        <h1 class="page-title__title">
            <slot />
        </h1>
    </div>
</template>

<script setup lang="ts">
import IconList from '@/components/icons/IconList.vue'
</script>

<style lang="scss" scoped>
.page-title {
    display: flex;
    align-items: center;
    &__title {
        font-size: 26px;
        line-height: 32px;
        text-transform: uppercase;
    }
    &__icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
}
</style>
