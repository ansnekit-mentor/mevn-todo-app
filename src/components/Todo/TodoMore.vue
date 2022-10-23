<template>
    <section class="todo-more">
        <h1 class="todo-more__title">
            asdf asdfa 123 Lorem, ipsum dolor sit amet conse ct et u r adipis icing elit. Nobis
            atque corporis cum recusandae fugit necessitatibus reprehenderit nostrum aliquid
            explicabo unde.
        </h1>
        <p class="todo-more__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eligendi totam nam doloribus praesentium
            distinctio amet reprehenderit numquam sunt minus aperiam.
        </p>
        <BaseButton class="todo-more__status-btn button">Невыполнено</BaseButton>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'

defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    isDone: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="scss" scoped>
.todo-more {
    position: relative;
    width: 100%;
    max-width: 800px;
    padding: 40px;
    border-radius: 12px;

    background-color: var(--color-theme-black);

    &__title {
        font-size: 24px;
        line-height: 28px;

        padding-right: 140px;

        margin-bottom: 30px;
    }

    &__description {
        font-size: 16px;
        line-height: 24px;
    }

    &__status-btn {
        position: absolute;
        top: 35px;
        right: 35px;
        z-index: 2;
    }
}
</style>
