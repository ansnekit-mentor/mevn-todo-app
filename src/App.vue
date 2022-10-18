<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import LayoutDefaultVue from '@/layouts/LayoutDefault.vue'

const route = useRoute()

const layout = computed(() => route.meta.layout ?? LayoutDefaultVue)
</script>

<template>
    <component :is="layout">
        <RouterView />
    </component>
</template>

<style lang="scss" scoped></style>
