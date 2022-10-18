<template>
    <div class="layout-default">
        <TheHeader />

        <main class="main">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<style lang="scss" scoped>
.layout-default {
    display: flex;
    flex-direction: column;
}

.main {
    margin-top: 100px;
    width: 100%;
}
</style>
