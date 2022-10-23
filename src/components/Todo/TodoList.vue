<template>
    <ul class="todo-list">
        <!-- <TodoItem
            v-for="(item, idx) of list"
            :id="idx"
            :key="idx"
            :is-arhived="isArhived"
            :title="item.title"
        /> -->
        <TodoItem id="0" title="Asdf" :is-arhived="isArhived" :done="true" />
        <TodoItem
            id="1"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, officiis?"
            :is-arhived="isArhived"
        />
        <TodoItem id="2" title="KLvb waojv asd wijhlkj slajlfgj" :is-arhived="isArhived" />
    </ul>
</template>

<script setup lang="ts">
import TodoItem from '@/components/Todo/TodoItem.vue'

defineProps({
    list: {
        type: Array,
        default: () => [],
    },
    isArhived: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="scss" scoped>
$duration: 0.8s;

.todo-list {
    max-width: 700px;

    margin: 0;
    padding: 0;
    margin: 0 auto;
    padding: 0;

    font-size: 20px;
    list-style: none;

    &__button {
        margin-bottom: 20px;
    }
}
</style>
