<template>
    <div class="page-task-more">
        <BaseBack />

        <div class="page-task-more__buttons flex-align-center">
            <BaseButton class="button button--cirlce">
                <IconEdit class="base-icon" width="24" height="24" />
            </BaseButton>
            <BaseButton class="button button--cirlce">
                <IconArchive class="base-icon" width="24" height="24" />
            </BaseButton>
            <BaseButton class="button button--cirlce">
                <IconDelete class="base-icon" width="24" height="24" />
            </BaseButton>
        </div>

        <TodoMore />
    </div>
</template>

<script setup lang="ts">
import TodoMore from '@/components/Todo/TodoMore.vue'
import BaseBack from '@/components/base/BaseBack.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconArchive from '@/components/icons/IconArchive.vue';
</script>

<style lang="scss" scoped>
.page-task-more {
    &__buttons {
        justify-content: flex-end;
        gap: 10px;

        margin-bottom: 20px;
    }
}
</style>
