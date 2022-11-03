<template>
    <div class="page-task-more">
        <BaseBack />

        <div v-if="!task">Задача не найдена</div>

        <template v-else>
            <div class="page-task-more__buttons flex-align-center">
                <RouterLink
                    :to="{ name: 'taskEdit', params: { id: route.params.id } }"
                    class="button button--cirlce"
                >
                    <IconEdit class="base-icon" width="24" height="24" />
                </RouterLink>
                <BaseButton class="button button--cirlce" @click="onDelete">
                    <IconDelete class="base-icon" width="24" height="24" />
                </BaseButton>
            </div>

            <TodoMore :task="task" @change-status="onChangeStatus($event, 'done')" />
        </template>
    </div>
</template>

<script setup lang="ts">
import TodoMore from '@/components/Todo/TodoMore.vue'
import BaseBack from '@/components/base/BaseBack.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useTasks from '@/composables/useTasks'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id.toString() ?? '')

const { task, fetchTask, onChangeStatus, onDeleteTask } = useTasks()

onMounted(async () => {
    if (id.value) {
        await fetchTask(id.value)
    }
})

const onDelete = async () => {
    if (id.value) {
        await onDeleteTask(id.value)
        router.push({ name: 'tasks' })
    }
}
</script>

<style lang="scss" scoped>
.page-task-more {
    width: 700px;

    &__buttons {
        justify-content: flex-end;
        gap: 10px;

        margin-bottom: 20px;
    }
}
</style>
